import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    redirects: {
        'resume': '/public/Hardik_Sharma_Resume.pdf',
        'kasol': '/blog/post-1.md',
        'maxims': '/blog/post-2.md'
    }
});
