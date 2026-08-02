import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://neobluemind.github.io/clarity/' : 'https://clarity-archive.example',
  base: isGitHubPages ? '/clarity/' : '/',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath, remarkDirective],
    rehypePlugins: [rehypeSlug, rehypeKatex],
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
