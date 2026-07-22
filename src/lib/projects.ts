import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectSummary = {
  entry: CollectionEntry<'projects'>;
  title: string;
  summary: string;
  type: string;
  year: number;
  status: string;
  tags: string[];
  featured: boolean;
  order: number;
  href: string;
};

export async function getProjects(): Promise<ProjectSummary[]> {
  const entries = await getCollection('projects');

  return entries
    .map((entry) => ({
      entry,
      title: entry.data.title,
      summary: entry.data.summary,
      type: entry.data.type,
      year: entry.data.year,
      status: entry.data.status,
      tags: entry.data.tags,
      featured: entry.data.featured,
      order: entry.data.order,
      href: `/projects/${entry.id}`,
    }))
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        a.order - b.order ||
        b.year - a.year,
    );
}
