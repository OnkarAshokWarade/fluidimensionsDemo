import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { toHTML } from '@portabletext/to-html';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'wwt4wlxz';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Build-time client: the site is static, so posts are fetched when the site is built.
const client = createClient({ projectId, dataset, apiVersion: '2025-01-01', useCdn: false });
const builder = createImageUrlBuilder({ projectId, dataset });
export const urlFor = (source: unknown) => builder.image(source as never);

export interface PostSummary {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  author?: string;
  mainImage?: { asset?: unknown; alt?: string };
}
export interface Post extends PostSummary { body: any[]; _updatedAt: string }

const summaryFields = `title, "slug": slug.current, publishedAt, excerpt, author, mainImage`;
const published = `_type == "post" && defined(slug.current) && publishedAt <= now()`;

// A failed or empty fetch must not break the whole site build: the blog just shows no posts.
async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.warn('[sanity] fetch failed, continuing without posts:', (error as Error).message);
    return fallback;
  }
}

export const getPosts = () =>
  safeFetch<PostSummary[]>(`*[${published}] | order(publishedAt desc){${summaryFields}}`, {}, []);

export const getPost = (slug: string) =>
  safeFetch<Post | null>(`*[${published} && slug.current == $slug][0]{${summaryFields}, _updatedAt, body}`, { slug }, null);

const esc = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const renderBody = (blocks: any[] = []) =>
  toHTML(blocks, {
    components: {
      types: {
        image: ({ value }: any) => {
          if (!value?.asset) return '';
          const src = urlFor(value).width(1200).auto('format').url();
          const caption = value.caption ? `<figcaption>${esc(value.caption)}</figcaption>` : '';
          return `<figure><img src="${src}" alt="${esc(value.alt || '')}" loading="lazy" decoding="async" />${caption}</figure>`;
        },
      },
      marks: {
        link: ({ children, value }: any) => {
          const href = String(value?.href || '');
          const external = /^https?:/.test(href);
          return `<a href="${esc(href)}"${external ? ' rel="noopener noreferrer"' : ''}>${children}</a>`;
        },
      },
    },
  });

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
