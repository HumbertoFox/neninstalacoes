import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotto: ['var(--font-robotto-sans)', 'sans-serif'],
        robotto_cond: ['var(--font-robotto-cond-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;