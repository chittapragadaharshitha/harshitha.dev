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
  "Microsoft Graph",
  "candidate matching",
  "duplicate-reply prevention",
  "restart recovery",
  "connection pooling",
  "resume attachments",
  "Azure",
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
