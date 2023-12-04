import Layout from '@/components/layout/Layout';
import Header from '@/components/blocks/Header';
import Contacts from '@/components/blocks/Contacts';
import About from '@/components/blocks/About';
import Doors from '@/components/blocks/Doors';
import Gates from '@/components/blocks/Gates';
import Grilles from '@/components/blocks/Grilles';
import Head from 'next/head';

export default function Home() {
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
        {/* Надаємо гарантію та сертифікат на продукцію, що випускається. */}
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
