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
    //   '2xl': {'min': '1536px'},    
    // },


    extend: {
      colors: {
        background: '#262629',
        primary: '#F3AA3A',
        buttons: '#181A20',
        b_hover:'#F3AA3A',
        boxshadow: '',
      }
    },

    
  },
  plugins: [],
}