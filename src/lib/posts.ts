import { getCollection, type CollectionEntry } from 'astro:content';

export type Category = {
  key: string;
  label: string;
  match: string[];
};

export type PostSummary = {
  entry: CollectionEntry<'posts'>;
  title: string;
  description: string;
  date: Date;
  dateValue: number;
  year: number;
  dateLabel: string;
  tags: string[];
  category: Category;
  href: string;
};

export const categoryRules: Category[] = [
  {
    key: 'course',
    label: 'Course notes',
    match: [
      'course',
      'cfd',
      'fluid mechanics',
      'two-phase flow',
      'heat transfer',
      'numerical methods',
      'math',
    ],
  },
  {
    key: 'tooling',
    label: 'Tools',
    match: [
      'tooling',
      'commands',
      'conda',
      'python',
      'automation',
      'github actions',
      'powershell',
      'vs code',
      'windows',
      'system',
      'debugging',
      'data workflow',
    ],
  },
  {
    key: 'research',
    label: 'Research',
    match: [
      'fib',
      'note',
      'thermal',
      'engineering',
      'propulsion',
      'microscopy',
    ],
  },
  {
    key: 'life',
    label: 'Life',
    match: ['life', 'reflection', 'diary'],
  },
  {
    key: 'web',
    label: 'Web',
    match: [
      'web',
      'astro',
      'illustrator',
      'personal site',
      'bookmarks',
      'resources',
    ],
  },
];

export const fallbackCategory: Category = {
  key: 'notes',
  label: 'Notes',
  match: [],
};

export function getCategory(tags: string[] = []): Category {
  const normalized = tags.map((tag) => String(tag).toLowerCase());
  return (
    categoryRules.find((category) =>
      category.match.some((keyword) => normalized.includes(keyword)),
    ) || fallbackCategory
  );
}

export async function getPosts(): Promise<PostSummary[]> {
  const entries = await getCollection('posts');

  return entries
    .map((entry) => {
      const date = entry.data.pubDate;
      const dateValue = date.valueOf();
      const tags = entry.data.tags;

      return {
        entry,
        title: entry.data.title,
        description:
          entry.data.description ||
          'A research, technical, or learning note in progress.',
        date,
        dateValue,
        year: date.getFullYear(),
        dateLabel: date.toLocaleDateString('en', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }),
        tags,
        category: getCategory(tags),
        href: `/posts/${entry.id}`,
      };
    })
    .sort((a, b) => b.dateValue - a.dateValue);
}
