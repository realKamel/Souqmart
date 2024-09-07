/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js" ],
  corePlugins: {
    preflight: false
  }
  , theme: {
    extend: {},
  },
  plugins: [
    require( 'flowbite/plugin' )
  ],
};

