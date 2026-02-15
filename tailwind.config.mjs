/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'luxury-black': '#0a0a0a', // var(--color-luxury-black)
                'luxury-gold': '#c6a87c', // var(--color-luxury-gold)
                'luxury-white': '#f5f5f5', // var(--color-luxury-white)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
