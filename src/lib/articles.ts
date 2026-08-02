import type { CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'articles'>;

const titleCase = (value: string) => value
  .replace(/[-_]+/g, ' ')
  .replace(/\b\w/g, (letter) => letter.toUpperCase());

export const articleNumber = (entry: ArticleEntry) => {
  const match = entry.id.match(/(?:^|\/)0*(\d+)(?:-|$)/);
  return match ? Number(match[1]) : 9999;
};

const textFromBody = (body = '') => body
  .replace(/^```[\s\S]*?```/gm, '')
  .replace(/<[^>]+>/g, '')
  .replace(/[#>*_`\[\]]/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const firstParagraph = (body = '') => {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph && !paragraph.startsWith('#') && !paragraph.startsWith('|') && !paragraph.startsWith('```') && !paragraph.startsWith('>'));
  return textFromBody(paragraphs[0] ?? '').slice(0, 180);
};

export const articleMeta = (entry: ArticleEntry) => {
  const body = entry.body ?? '';
  const number = articleNumber(entry);
  const slug = entry.id.split('/').pop()?.replace(/\.md$/, '') ?? entry.id;
  const inferredTitle = body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? titleCase(slug.replace(/^\d+-/, ''));
  const title = entry.data.title ?? inferredTitle;
  const description = entry.data.description ?? firstParagraph(body) ?? `A considered guide to ${title.toLowerCase()}.`;
  const category = entry.data.category ?? titleCase(entry.id.split('/')[0] ?? 'Library');
  const tags = entry.data.tags?.length ? entry.data.tags : [category, 'AI research'];
  const wordCount = textFromBody(body).split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(2, Math.ceil(wordCount / 220));
  const date = entry.data.date ?? new Date(2024, 0, Math.max(1, Math.min(number, 225)));

  return {
    ...entry,
    slug: entry.id,
    number,
    title,
    description,
    category,
    tags,
    readingTime,
    date,
    author: entry.data.author ?? 'The Clarity editorial desk',
    featured: entry.data.featured ?? number <= 3,
  };
};

export const sortArticles = (entries: ArticleEntry[]) => entries
  .filter((entry) => !entry.data.draft)
  .sort((a, b) => articleNumber(a) - articleNumber(b));

export const getArticleHref = (entry: ArticleEntry | ReturnType<typeof articleMeta>) => `/articles/${entry.id.replace(/\.md$/, '')}`;

export const formatDate = (date: Date) => new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}).format(date);

export const slugify = (value: string) => value
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

export const tableOfContents = (body = '') => [...body.matchAll(/^#{2,3}\s+(.+)$/gm)]
  .map((match) => ({
    title: match[1].replace(/[*_`]/g, '').trim(),
    slug: slugify(match[1].replace(/[*_`]/g, '').trim()),
    level: match[0].startsWith('###') ? 3 : 2,
  }));
