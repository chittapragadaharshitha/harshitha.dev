import { notFound } from "next/navigation";
import { allProjects } from "../../../lib/projects";
import { Header } from "./header";
import "./mdx.css";

export const revalidate = 60;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage(props: Props) {
  const params = await props.params;
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-lg text-zinc-600 mb-8">{project.description}</p>
          
          {project.url && (
            <div className="mb-8">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Project →
              </a>
            </div>
          )}
          
          <div className="prose prose-zinc max-w-none">
            <p>This is a placeholder for the project content. In a real implementation, you would load the MDX content here.</p>
            <p>Project details:</p>
            <ul>
              <li><strong>Title:</strong> {project.title}</li>
              <li><strong>Description:</strong> {project.description}</li>
              <li><strong>Date:</strong> {project.date}</li>
              {project.repository && <li><strong>Repository:</strong> {project.repository}</li>}
              {project.url && <li><strong>URL:</strong> <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></li>}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
