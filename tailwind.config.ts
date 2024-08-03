import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            xl: { max: '1200px' },
            md: { max: '991.98px' },
            sm: { max: '767.98px' },
            xs: { max: '566.98px' },
            xxs: { max: '479.98px' },
         },
         container: {
            center: true,
            padding: '15px',
         },
      },
   },
   plugins: [require('tailwindcss-animated')],
};
export default config;
