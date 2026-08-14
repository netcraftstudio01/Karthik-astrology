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
        'gold': '#FEBD14',
        'deep-purple': '#fff8e5',
        'midnight': '#fffdf7',
        'sage': '#d39a00',
      },
    },
  },
  plugins: [],
}
export default config
