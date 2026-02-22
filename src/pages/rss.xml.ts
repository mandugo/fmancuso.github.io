import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteConfig } from '../data/site';
import { getAllPosts } from '../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getAllPosts('en');
  return rss({
    title: `${siteConfig.name} — Blog`,
    description: siteConfig.description.en,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.replace(/^en\//, '')}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
