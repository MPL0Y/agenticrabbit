import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://agenticrabbit.com',
    integrations: [
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
