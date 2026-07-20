import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectSummary = {
  entry: CollectionEntry<'projects'>;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  type: string;
  typeZh: string;
  year: number;
  status: string;
  statusZh: string;
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
      titleZh: entry.data.titleZh,
      summary: entry.data.summary,
      summaryZh: entry.data.summaryZh,
      type: entry.data.type,
      typeZh: entry.data.typeZh,
      year: entry.data.year,
      status: entry.data.status,
      statusZh: entry.data.statusZh,
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
