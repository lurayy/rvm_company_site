import Head from 'next/head';

// Sections
import Hero from '../components/Hero';
import Management from '../components/Management';
import Services from '../components/Services';


export default function Home({ hero }) {

  return (
    <>
      <Head>
        <title>RVM Nepal | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <Management />
      {/* <TrustUs /> */}


    </>
  )
}
