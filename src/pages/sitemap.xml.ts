import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const blogPosts = await getCollection('blog');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seo-agentur-offenbach.de/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://seo-agentur-offenbach.de/blog/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${blogPosts
  .map(
    (post) => `  <url>
    <loc>https://seo-agentur-offenbach.de/blog/${post.slug}/</loc>
    <lastmod>${post.data.pubDate.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
