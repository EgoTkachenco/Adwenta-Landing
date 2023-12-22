import Layout from '@/components/layout/Layout';
import Header from '@/components/blocks/Header';
import Contacts from '@/components/blocks/Contacts';
import About from '@/components/blocks/About';
import Doors from '@/components/blocks/Doors';
import Gates from '@/components/blocks/Gates';
import Grilles from '@/components/blocks/Grilles';
import Head from 'next/head';
import constants from '@/constants';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window &&
      window.gtag('event', 'conversion', {
        transaction_id: '',
      });
  }, []);
  return (
    <>
      <Head>
        <title>Виробник протипожежних та рентгенозахисних дверей</title>
        <meta
          name="description"
          content="Протипожежні, рентгенозахисні, куленепробивні та вхідні двері у Києві з доставкою по всій Україні від компанії Адвента 2000."
        />
        <meta
          name="google-site-verification"
          content="isPZL5HUmlC88C_jnomToPJ88foxwMDsmxtCJGXpQnc"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
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
							},
							{
								"@type": "ContactPoint",
								"telephone": "${constants.phone_2.label}"
							}
						]
					}`,
          }}
        />
      </Head>

      <Layout>
        <Header />
        <About />
        <Doors />
        <Gates />
        <Grilles />
      </Layout>
      <Contacts />
    </>
  );
}
