import { getCollection, type CollectionEntry } from 'astro:content';

export type PublicationSummary = {
  entry: CollectionEntry<'publications'>;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  volume?: string;
  articleNumber?: string;
  doi?: string;
  summary: string;
  tags: string[];
  selected: boolean;
  order: number;
  links: Array<{ label: string; url: string }>;
};

export async function getPublications(): Promise<PublicationSummary[]> {
  const entries = await getCollection('publications');

  return entries
    .map((entry) => ({ entry, ...entry.data }))
    .sort((a, b) => b.year - a.year || a.order - b.order);
}
