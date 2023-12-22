import { Html, Head, Main, NextScript } from 'next/document';
import constants from '@/constants';

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <link rel="canonical" href={constants.cannonical} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content={constants.keywords} />

        <meta property="og:title" content={constants.title} />
        <meta property="og:type" content={constants.og_type} />
        <meta property="og:description" content={constants.description} />
        <meta property="og:url" content={constants.cannonical} />
        <meta property="og:image" content={constants.og_pic} />
        <meta property="og:locale" content={constants.locale} />
        <meta property="og:site_name" content={constants.site_name} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
