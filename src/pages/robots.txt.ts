import type { APIRoute } from 'astro';

const base = 'https://example.com';

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL(base)).toString().replace(/\/$/, '');
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Root redirect page is client-side language routing',
    'Disallow: /index.html',
    '',
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
