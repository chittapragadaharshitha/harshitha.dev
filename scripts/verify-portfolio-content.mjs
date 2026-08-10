import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const checkedRoots = ["app", "lib"];

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const sourceFiles = checkedRoots
  .flatMap((directory) => walk(join(root, directory)))
  .filter((path) => /\.(ts|tsx|mdx)$/.test(path));

const source = sourceFiles
  .map((path) => `\n--- ${relative(root, path)} ---\n${readFileSync(path, "utf8")}`)
  .join("\n");

const requiredClaims = [
  "AgentMag",
  "Enterprise Hiring Automation",
  "Content Automation Studio",
  "OpenClaw Setup",
  "enterprise-grade architecture",
  "Microsoft Graph",
  "candidate matching",
  "duplicate-reply prevention",
  "restart recovery",
  "connection pooling",
  "resume attachments",
  "Azure",
  "385",
  "1,165",
  "fixed-recipient",
  "Docker isolation",
  "client-owned host",
];

const expectedProjectSlugs = [
  "agentmag",
  "enterprise-hiring-automation",
  "content-automation-studio",
  "openclaw-setup",
  "ai-internship-recommendation-engine",
  "absolute-prosthetics",
  "pneumonia-detection-cnn",
  "currency-converter",
];

const dossierHeadings = [
  "System architecture",
  "End-to-end execution",
  "What Harshitha implemented",
  "Reliability engineering",
  "Technical decisions",
  "Evidence and scope",
];

const forbiddenClaims = [
  "Harshith Ventures",
  "https://harshith.com",
  "Head of Growth at JustPaid",
  "github.com/harshith-21",
  "twitter.com/harshithio",
];

const legacyRoutes = [
  "app/media/page.tsx",
  "app/work/ambassadors-solutions/page.tsx",
  "app/work/artifin/page.tsx",
  "app/work/basedaf/page.tsx",
  "app/work/harshith-ventures/page.tsx",
  "app/work/justpaid-ai/page.tsx",
  "app/work/love-death-robots/page.tsx",
  "app/work/metaschool/page.tsx",
];

const problems = [];

for (const claim of requiredClaims) {
  if (!source.toLowerCase().includes(claim.toLowerCase())) {
    problems.push(`Missing required portfolio claim: ${claim}`);
  }
}

for (const slug of expectedProjectSlugs) {
  if (!source.includes(`slug: "${slug}"`)) {
    problems.push(`Missing project: ${slug}`);
  }
}

const dossierCount = (source.match(/technicalDossier:/g) ?? []).length;
if (dossierCount < expectedProjectSlugs.length) {
  problems.push(
    `Expected ${expectedProjectSlugs.length} technical dossiers, found ${dossierCount}`,
  );
}

for (const heading of dossierHeadings) {
  if (!source.includes(heading)) {
    problems.push(`Missing dossier heading: ${heading}`);
  }
}

const introPath = join(root, "app/components/site-intro.tsx");
if (!existsSync(introPath)) {
  problems.push("Missing first-session intro component");
} else {
  const introSource = readFileSync(introPath, "utf8");
  for (const contractTerm of [
    "harshitha:intro:v1",
    "sessionStorage",
    "aria-hidden",
    "prefers-reduced-motion",
  ]) {
    if (!introSource.includes(contractTerm)) {
      problems.push(`Intro is missing contract term: ${contractTerm}`);
    }
  }
  if (introSource.includes("localStorage")) {
    problems.push("Intro must be scoped to the current tab session, not localStorage");
  }
}

if (/role:\s*["']Enterprise Architect["']/.test(source)) {
  problems.push("Enterprise architecture must be framed as a direction, not a current job title");
}

for (const claim of forbiddenClaims) {
  if (source.includes(claim)) {
    problems.push(`Legacy claim is still present: ${claim}`);
  }
}

for (const path of legacyRoutes) {
  if (existsSync(join(root, path))) {
    problems.push(`Legacy public route is still present: ${path}`);
  }
}

if (problems.length > 0) {
  console.error(problems.map((problem) => `- ${problem}`).join("\n"));
  process.exit(1);
}

console.log("Portfolio content contract passed.");
