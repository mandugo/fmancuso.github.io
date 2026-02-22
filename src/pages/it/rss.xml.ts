import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteConfig } from '../../data/site';
import { getAllPosts } from '../../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getAllPosts('it');
  return rss({
    title: `${siteConfig.name} — Blog`,
    description: siteConfig.description.it,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/it/blog/${post.id.replace(/^it\//, '')}/`,
    })),
    customData: '<language>it</language>',
  });
}
