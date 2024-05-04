import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import Header from '@components/Header';
import Content from '@components/Content';
import Portfolio from '@components/Portfolio';
import Skills from '@components/Skills';
import Footer from '@components/Footer';
import { fetchHeaders, fetchPortfolios, fetchSkills, fetchFooters } from '@services/contentful';
import { Headers as HeadersModel } from '@models/HeadersModel';
import { Portfolios as PortfoliosModel } from '@models/PortfoliosModel';
import { Skills as SkillsModel } from '@models/SkillsModel';
import { Footers as FootersModel } from '@models/FootersModel';

interface Props {
  headers?: HeadersModel;
  portfolios?: PortfoliosModel;
  skills?: SkillsModel;
  footers?: FootersModel;
}

const Home: NextPage<Props> = ({ headers, portfolios, skills, footers }) => {
  const metaContent =
    skills?.items && skills.items[0].fields?.summary && documentToPlainTextString(skills.items[0].fields.summary);

  return (
    <>
      <Head>
        <title>Vincent Pageaud | {headers?.items && headers.items[0]?.fields?.title}</title>
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={headers} />
      <Content>
        <Portfolio data={portfolios} />
        <Skills data={skills} />
      </Content>
      <Footer data={footers} />
    </>
  );
};

export const getStaticProps = async (ctx: NextPageContext) => {
  const result = await Promise.all([
    fetchHeaders(ctx.locale),
    fetchPortfolios(ctx.locale),
    fetchSkills(ctx.locale),
    fetchFooters(ctx.locale),
  ]);

  return {
    props: {
      headers: result[0],
      portfolios: result[1],
      skills: result[2],
      footers: result[3],
    },
  };
};

export default Home;
