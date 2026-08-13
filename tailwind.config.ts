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
        'gold': '#D4AF37',
        'deep-purple': '#2D1B4E',
        'midnight': '#0F0A1E',
        'sage': '#9B8C7C',
      },
    },
  },
  plugins: [],
}
export default config
