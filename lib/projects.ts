export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  url?: string;
  repository?: string;
  published: boolean;
}

export const projects: Project[] = [
];

export const allProjects = projects.filter(p => p.published);
