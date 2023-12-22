import '@/styles/globals.css';
import { Fira_Sans, Playfair_Display } from 'next/font/google';
// ${playfair_display.className} ${fira_sans.className}
const playfair_display = Playfair_Display({
  subsets: ['cyrillic'],
  weight: ['700'],
  variable: '--font-playfair-display',
});
const fira_sans = Fira_Sans({
  subsets: ['cyrillic'],
  weight: ['400', '500'],
  variable: '--font-fira-sans',
});
import Script from 'next/script';
import { AOSInit } from '@/components/AOSInit';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AOSInit />
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11412607352"
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'AW-11412607352', { 'page_title' : 'homepage', page_location: location.href });`,
        }}
      >
        {}
      </script>
      <div
        className={` text-gray-800 font-sans max-w-full overflow-hidden ${playfair_display.variable} ${fira_sans.variable}`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
