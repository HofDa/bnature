import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isCi = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgPages = repo.endsWith('.github.io');
const defaultBase = isUserOrOrgPages || !repo ? '/' : `/${repo}`;

export default defineConfig({
  // Local: root path. CI (GitHub Pages): infer project base from repository name.
  site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://example.com'),
  base: process.env.BASE_PATH || (isCi ? defaultBase : '/'),
  output: 'static',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
