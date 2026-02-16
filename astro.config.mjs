import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    // Placeholder URL
    site: 'https://barber-demo.netlify.app',

    integrations: [tailwind(), react(), keystatic()],
    output: 'static',

    i18n: {
        defaultLocale: "sk",
        locales: ["sk", "en"],
        routing: {
            prefixDefaultLocale: false
        }
    },

    adapter: vercel()
});