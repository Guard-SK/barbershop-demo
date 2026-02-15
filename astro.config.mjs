import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://barber-demo.netlify.app', // Placeholder URL
    integrations: [tailwind()],
    i18n: {
        defaultLocale: "sk",
        locales: ["sk", "en"],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
