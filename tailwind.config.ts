import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          DEFAULT: "#F9F8F6",
          darker: "#F1EFEA",
        },
        charcoal: {
          DEFAULT: "#2C2C2C",
          muted: "#2C2C2C/70",
          faded: "#2C2C2C/40",
        },
        mahogany: {
          DEFAULT: "#9C6B53",
          hover: "#835943",
        },
        sage: {
          DEFAULT: "#A3B19B",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;