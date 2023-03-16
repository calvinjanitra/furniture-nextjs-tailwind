/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend: {
            colors: {
                primary: '#23262F',
                accent: '#286F6C',
                grey: {
                    DEFAULT: '#919297',
                    1: '#D9D9D9',
                    2: '#E7E9EB',
                    3: '#F5F5F5',
                },
                white: '#fff',
                pink: 'pink',
            },
            fontFamily: {
                body: ['poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
