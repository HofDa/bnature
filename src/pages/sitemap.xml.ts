import type { APIRoute } from 'astro';

const base = 'https://example.com';
const langs = ['de', 'it'] as const;
const legalSlugs = ['impressum', 'privacy', 'cookies'] as const;

type Alternate = { lang: string; href: string };

const toIsoDate = () => new Date().toISOString().split('T')[0];

const buildUrlNode = (origin: string, path: string, alternates: Alternate[]) => {
  const loc = `${origin}${path}`;
  const links = alternates
    .map((alt) => `<xhtml:link rel="alternate" hreflang="${alt.lang}" href="${origin}${alt.href}" />`)
    .join('');
  return `<url><loc>${loc}</loc>${links}<lastmod>${toIsoDate()}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`;
};

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL(base)).toString().replace(/\/$/, '');
  const urls: string[] = [];

  urls.push(
    buildUrlNode(origin, '/de', [
      { lang: 'de', href: '/de' },
      { lang: 'it', href: '/it' },
      { lang: 'x-default', href: '/de' },
    ])
  );

  urls.push(
    buildUrlNode(origin, '/it', [
      { lang: 'de', href: '/de' },
      { lang: 'it', href: '/it' },
      { lang: 'x-default', href: '/de' },
    ])
  );

  for (const slug of legalSlugs) {
    for (const lang of langs) {
      urls.push(
        buildUrlNode(origin, `/${lang}/${slug}`, [
          { lang: 'de', href: `/de/${slug}` },
          { lang: 'it', href: `/it/${slug}` },
          { lang: 'x-default', href: `/de/${slug}` },
        ])
      );
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">` +
    urls.join('') +
    `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
