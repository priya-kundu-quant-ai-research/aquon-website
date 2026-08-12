import type { Config } from 'tailwindcss'

/**
 * Tailwind v4 note: theme values (colours, fonts, the type scale) live in
 * `@theme` in `src/app/globals.css`, which is the single source of truth.
 * This config is inert for theme purposes under v4 — the `colors` and
 * `fontFamily` blocks were removed so they can't drift from `@theme`.
 * Content globs are kept as documentation of the source roots.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default config
