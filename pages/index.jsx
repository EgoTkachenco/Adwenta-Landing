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
