/** @type {import('tailwindcss').Config} */
const withMT = require( "@material-tailwind/html/utils/withMT" );
module.exports = withMT( {
  content: [ "./src/**/*.{html,ts}", ],
  corePlugins: {
  }
  , theme: {
    extend: {},
  },
  plugins: [
    require( 'daisyui' ),
  ],
} );

