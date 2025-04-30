module.exports = {
    content: [
        './src/**/*.{astro,js,ts,jsx,tsx}',
        './public/**/*.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light', 'dark', 'cupcake'], // 必要に応じてテーマを追加
    },
};