import { NextPage } from 'next';
import Head from 'next/head';

import Header from 'components/Header/Header';
import Portfolio from 'components/Portfolio/Portfolio';
import Skills from 'components/Skills/Skills';
import Footer from 'components/Footer/Footer';

import useTranslation from 'hooks/useTranslation';
import useTranslationFromArray from 'hooks/useTranslationFromArray';

import skillsConf from 'configurations/skills';

const Home: NextPage = () => {
  let { contents } = useTranslationFromArray(skillsConf.summary);

  if (Array.isArray(contents)) contents = contents.join(' ');

  return (
    <>
      <Head>
        <title>Vincent Pageaud | {useTranslation('mainTitle')}</title>
        <meta name="description" content={contents} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <Header />
      <Portfolio />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
