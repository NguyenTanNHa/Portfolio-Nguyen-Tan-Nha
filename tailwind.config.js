/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        surface: 'hsl(var(--surface-muted))',
        primary: 'hsl(var(--brand-primary))',
        heading: 'hsl(var(--text-heading))',
        muted: 'hsl(var(--text-muted))',
        border: 'hsl(var(--border-light))',
        accent: {
          red: 'hsl(var(--accent-red))',
          yellow: 'hsl(var(--accent-yellow))',
          purple: 'hsl(var(--accent-purple))',
          teal: 'hsl(var(--accent-teal))',
        }
      },
      fontFamily: {
        sans: ['Tahoma', 'sans-serif'],
        serif: ['Tahoma', 'sans-serif'],
      },
      boxShadow: {
        'service': '0px 0px 56px -8px rgba(0, 0, 0, 0.17)',
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
}
