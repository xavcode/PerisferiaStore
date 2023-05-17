export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'xs': {'min' : '400', 'max':'639'},
    //   'sm': {'min': '640px', 'max': '767px'},
    //   'md': {'min': '768px', 'max': '1023px'},
    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   '2xl': {'min': '1536px' 'max': '1600px'},
    //   '3xl': {'min': '1536px'},    
    // },

    extend: {

      // screens: {
      //   '3xl': '1600px',
      // },
      colors: {
        primary: '#F3AA3A',
        bg: '#262629',
        bg_card: '#fafaf9',
        bg_filters_bar: 'white',
        bg_btn: '#181A20',
        header: '#F3AA3A',
        inputs: 'white',
        btn: 'black',
        btn_hover: '#F3AA3A',
        text: 'black',
        text_btn: 'white',
        text_filters_bar: '#9a3412',
        text_rating: '#b91c1c',
        boxshadow: '#F3AA3A',
      },

      darkMode: {
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

      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
}