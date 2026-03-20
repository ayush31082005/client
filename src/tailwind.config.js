/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    black: '#0D0D0D',
                    dark: '#1A1A1A',
                    secondary: '#2A2A2A',
                },
                accent: {
                    gold: '#C9A84C',
                    goldLight: '#F0C060',
                    goldDark: '#A07830',
                },
                text: {
                    light: '#1E1E1E',
                    muted: '#AAAAAA',
                },
                background: {
                    dark: '#0D0D0D',
                    card: '#1A1A1A',
                    surface: '#F5F5F5',
                },
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-right': {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-left': {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'bounce-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                'gold-shimmer': {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.8s ease-out forwards',
                'slide-up': 'slide-up 0.8s ease-out forwards',
                'slide-right': 'slide-right 0.8s ease-out forwards',
                'slide-left': 'slide-left 0.8s ease-out forwards',
                'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
                'gold-shimmer': 'gold-shimmer 1.5s linear infinite',
            },
        },
    },
    plugins: [],
}
