/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        searchBG: '#FCFCFD',
        heroBG: '#F8FAFB',
        activeLink: '#7950F2',
        supportBTN: '#E8E9FF',
        seeAll: '#9058FF',
        dot: "#D9D9D9",
        articleBG: '#E3D5FF',
        articleText: '#A0A38D',
        buttonText: '#7750F1',
        greenText: '#0DAD82',
        greenBG: '#E4FFF8',
        postsText: '#58A4FF',
        arrow: '#212121',
        postBTNBG: '#F7EEFF'
      }
    },
  },
  plugins: [],
};
