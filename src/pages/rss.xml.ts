import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { getPosts } from '../lib/sanity';

const esc = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const items = posts.map((post) => `<item><title>${esc(post.title)}</title><link>${SITE.url}/blog/${post.slug}/</link><guid>${SITE.url}/blog/${post.slug}/</guid><pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate><description>${esc(post.excerpt)}</description></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE.name} Blog</title><link>${SITE.url}/blog/</link><description>Engineering insights from ${SITE.name}.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
