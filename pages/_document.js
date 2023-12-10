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
        <NextScript type="application/ld+json">
          {`{
						"@context": "http://www.schema.org",
						"@type": "LocalBusiness",
						"name": "${constants.site_name}",
						"url": "${constants.cannonical}",
						"logo": "${constants.logo}",
						"description": "${constants.description}",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "${constants.address}",
							"postOfficeBoxNumber": "${constants.email.label}",
							"addressLocality": "${constants.city}",
							"addressCountry": "${constants.country}"
						},
						"openingHours": "Mo, Tu, We, Th, Fr 09:00-18:00",
						"contactPoint": [
							{
								"@type": "ContactPoint",
								"telephone": "${constants.phone_1.label}"
							}
							{
								"@type": "ContactPoint",
								"telephone": "${constants.phone_2.label}"
							}
						]
					}`}
        </NextScript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
