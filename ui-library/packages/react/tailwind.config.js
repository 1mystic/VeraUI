/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: '#352b38',
        slate: '#7e808c',
        lavender: {
          DEFAULT: '#dad8f9',
          deep: '#9b94e8',
          mid: '#b8b4f0',
          soft: '#eceaf9',
        },
        ghost: '#f4f3f8',
        white: '#ffffff',
        bg: '#edeaf4',
        success: {
          DEFAULT: '#059669',
          bg: '#d1fae5',
        },
        danger: {
          DEFAULT: '#dc2626',
          bg: '#fee2e2',
        },
        warning: {
          DEFAULT: '#92400e',
          bg: '#fef9c3',
        },
        info: {
          DEFAULT: '#1d4ed8',
          bg: '#dbeafe',
        },
        pink: {
          soft: '#f9d8f0',
          text: '#9d174d',
        },
        green: {
          soft: '#d8f9e8',
        },
        blue: {
          soft: '#d8edf9',
        },
        peach: '#f9e4d8',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: '0 4px 24px rgba(53, 43, 56, 0.07)',
        md: '0 8px 32px rgba(53, 43, 56, 0.10)',
        lg: '0 20px 60px rgba(53, 43, 56, 0.18)',
        hover: '0 12px 40px rgba(53, 43, 56, 0.12)',
        'btn-hover': '0 4px 16px rgba(53, 43, 56, 0.22)',
        'btn-hero-hover': '0 8px 32px rgba(53, 43, 56, 0.28)',
      },
      borderRadius: {
        xs: '6px',
        sm: '8px',
        md: '10px',
        lg: '12px',
        xl: '14px',
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
        '5xl': '28px',
        pill: '99px',
      },
    },
  },
  plugins: [],
}
