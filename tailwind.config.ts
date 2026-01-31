import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0D3D4D',
        'vibrant-teal': '#1DBFBF',
        'rich-purple': '#8B3FBF',
        'light-gray': '#F0F2F5',
        'mid-gray': '#A0AEC0',
        'gold': '#FFC700',
        'success-green': '#28A745',
        'error-red': '#DC3545',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}

export default config