# Premium Barber Shop - Astro & Tailwind CSS Template

A high-performance, dark-themed Barber Shop website template built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Designed for speed (100/100 Lighthouse), accessibility, and premium aesthetics.

![Project Preview](https://barbershop-demo-1.vercel.app)

## 🚀 Key Features

*   **100/100 Lighthouse Score**: Optimized for Core Web Vitals (LCP, CLS, FID).
*   **Modern Tech Stack**: Built with Astro v5, Tailwind CSS, and TypeScript.
*   **Premium Design**: Dark mode aesthetic with gold accents, deep gradients, and smooth animations.
*   **Responsive**: Fully responsive grid layouts (Bento grids, pricing tiers) for Mobile, Tablet, and Desktop.
*   **Interactive Elements**:
    *   On-scroll animations using `IntersectionObserver`.
    *   Infinite Marquee for reviews.
    *   Magnetic buttons and hover effects.
    *   Mobile-friendly navigation menu.
*   **Content Collections**: Type-safe content management for Barbers, Services, and Reviews.
*   **SEO Optimized**: Semantic HTML5, metadata, and Open Graph tags.

## 🛠️ Stack

*   **Framework**: [Astro](https://astro.build)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com)
*   **Animations**: CSS Keyframes & Custom Scroll Reveal
*   **Icons**: [Lucide Icons](https://lucide.dev) (or SVGs)
*   **Fonts**: `@fontsource-variable/inter` & `@fontsource-variable/oswald`

## 📦 Getting Started

### Prerequisites

*   Node.js v18+
*   npm or pnpm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/barber-shop-template.git
    cd barber-shop-template
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── assets/         # Optimized images
├── components/     # Reusable UI components (CTA, Marquee, etc.)
├── content/        # Type-safe content (MD/MDX files)
├── layouts/        # Page layouts (SEO, Header, Footer)
├── pages/          # Astro pages (Routes)
└── styles/         # Global CSS using Tailwind directives
```

## 🎨 Customization

### Changing Content
Edit the markdown files in `src/content/` to update:
*   **Barbers**: `src/content/barbers/`
*   **Services**: `src/content/services/`
*   **Reviews**: `src/content/reviews/`

### Changing Colors
The project uses a custom Tailwind config. Update `tailwind.config.mjs` to change the `luxury-gold` or neutral palettes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
