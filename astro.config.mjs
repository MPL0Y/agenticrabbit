import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://agenticrabbit.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    redirects: {
        'kasol': '/blog/post-1',
        'maxims': '/blog/post-2',
        'image-gen': '/blog/post-3'
    }
});
