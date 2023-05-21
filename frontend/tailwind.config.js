export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        primary: '#D97706',
        bg: '#262629',
        bg_card: '#fafaf9',
        bg_filters_bar: 'white',
        bg_btn: '#181A20',
        header: '#D97706',
        inputs: 'white',
        btn: 'black',
        btn_hover: '#F3AA3A',
        text: 'black',
        text_btn: 'white',
        text_filters_bar: '#9a3412',
        text_rating: '#b91c1c',
        boxshadow: '#D97706',
      },
    },

    darkMode: {
      colors: {
        primary: '#F3AA3A',
        bg: '#262629',
        bg_card: '#78716c',
        bg_filters_bar: 'white',
        bg_btn: '',
        header: '',
        inputs: '#064e3b',
        btn: '#064e3b',
        btn_hover: '#064e3b',
        text: 'black',
        text_button: 'white',
        text_rating: '',
        text_filters_bar: '',
        boxshadow: '#064e3b',
      }
    },
  },
  plugins: [require("daisyui")],
}