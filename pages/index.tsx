import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import Header from '@components/Header';
import Portfolio from '@components/Portfolio';
import Skills from '@components/Skills';
import Footer from '@components/Footer';
import { fetchHeaders, fetchPortfolios, fetchSkills } from '@services/contentful';
import { Headers as HeadersModel } from '@models/HeadersModel';
import { Portfolios as PortfoliosModel } from '@models/PortfoliosModel';
import { Skills as SkillsModel } from '@models/SkillsModel';

import useTranslationFromArray from '@hooks/useTranslationFromArray';

import skillsConf from '@configs/skills';

interface Props {
  headers: HeadersModel;
  portfolios: PortfoliosModel;
  skills: SkillsModel;
}

const Home: NextPage<Props> = ({ headers, portfolios, skills }) => {
  let { contents } = useTranslationFromArray(skillsConf.summary);

  if (Array.isArray(contents)) contents = contents.join(' ');

  return (
    <>
      <Head>
        <title>Vincent Pageaud | {headers.items[0]?.fields.title}</title>
        <meta name="description" content={contents} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={headers} />
      <main>
        <Portfolio data={portfolios} />
        <Skills data={skills} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async (ctx: NextPageContext) => {
  const result = await Promise.all([fetchHeaders(ctx.locale), fetchPortfolios(ctx.locale), fetchSkills(ctx.locale)]);

  return { props: { headers: result[0], portfolios: result[1], skills: result[2] } };
};

export default Home;
