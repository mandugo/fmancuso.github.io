import { getCollection } from 'astro:content';
import type { Lang } from '../data/site';

const WORDS_PER_MINUTE = 200;

export async function getAllPosts(lang: Lang) {
  const posts = await getCollection('blog', (entry) => {
    return entry.data.lang === lang && !entry.data.draft;
  });
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export async function getLatestPosts(lang: Lang, limit: number) {
  const posts = await getAllPosts(lang);
  return posts.slice(0, limit);
}

export function readingTime(text: string, lang: Lang): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return lang === 'en' ? `${minutes} min read` : `${minutes} min di lettura`;
}
