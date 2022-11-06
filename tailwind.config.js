/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "c-30": "30px",
        "c-40": "40px",
        "c-50": "50px",
        "c-60": "60px",
      },
      spacing: {
        "c-5": "5px",
      },
      colors: {
        "c-white": "#d6d6d6",
        "c-light-white": "#eaeded",
        "c-gray": "#ccc",
        "c-light-gray": "#f3f3f3",
        "c-dark-gray": "#cdcdcd",
        "c-dim-gray": "#dadada",
        "c-light-orange": "#febd69",
        "c-dark-orange": "#f4a847",
        "c-orange": "#e47911",
        "c-black": "#0F1111",
        "c-blue": "#007185",
        "c-red": "#B12704",
      },
      lineHeight: {
        "c-14": "14px",
        "c-15": "15px",
        "c-44": "44px",
      },
      flex: {
        "flex-auto": "1 1 auto",
      },
      backgroundImage: {
        "amazon-img":
          "url(https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936311_.png)",
        "country-img":
          "url(https://m.media-amazon.com/images/S/sash/fe2UeLQmJ11kKHN.png)",
        "arrow-img":
          "url(https://m.media-amazon.com/images/S/sash/ydDD9hnRfziI$y7.png)",
        "rating-img":
          "url(https://m.media-amazon.com/images/S/sash/ouR9NRElwmzAIev.png)",
      },
      backgroundPosition: {
        "pos-0": "0 0",
        "pos-1": "-10px -51px",
        "pos-2": "-270px -109px",
        "pos-3": "-71px -378px",
        "pos-4": "0 1000px",
        "pos-5": "0 -381px",
        "pos-6": "2px -280px",
        "pos-7": "0 -166px",
        "pos-8": "-98px -2px",
        "pos-9": "-75px -2px",
        "pos-10": "-123px -2px",
        "pos-11": "0 -256px",
        "pos-12": "-10px -340px",
        "pos-13": "-34px 0",
        "pos-14": "-183px -340px",
        "pos-15": "-183px -360px",
      },
      backgroundSize: {
        "size-1": "68px 52px",
      },
      boxShadow: {
        "c-1": "0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%)",
        "c-2": "0 2px 4px 0 rgb(0 0 0 / 13%)",
        "c-3": "inset 0 0 0 2px #fff, inset 0 0 0 4px #008296",
        "c-4": "0 2px 5px 0 rgb(213 217 217 / 50%)",
        "c-5": "0 2px 5px rgb(15 17 17 / 15%)",
        "c-6": "0 0 0 3px #c8f3fa",
      },
    },
  },
  plugins: [],
};
