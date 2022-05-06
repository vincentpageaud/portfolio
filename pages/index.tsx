import { NextPage } from 'next';
import Head from 'next/head';

import Header from '@components/Header';
import Portfolio from '@components/Portfolio';
import Skills from '@components/Skills';
import Footer from '@components/Footer';

import useTranslation from '@hooks/useTranslation';
import useTranslationFromArray from '@hooks/useTranslationFromArray';

import skillsConf from '@configs/skills';

const Home: NextPage = () => {
  let { contents } = useTranslationFromArray(skillsConf.summary);

  if (Array.isArray(contents)) contents = contents.join(' ');

  return (
    <>
      <Head>
        <title>Vincent Pageaud | {useTranslation('mainTitle')}</title>
        <meta name="description" content={contents} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Portfolio />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default Home;
