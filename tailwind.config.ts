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

      keyframes: {
         'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
         },
         'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
         },
      },
      animation: {
         'accordion-down': 'accordion-down 0.2s ease-out',
         'accordion-up': 'accordion-up 0.2s ease-out',
      },
   },
   plugins: [require('tailwindcss-animated')],
};
export default config;
