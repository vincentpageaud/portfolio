import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { Portfolios } from '@models/PortfoliosModel';

import CardsManager from './components/CardsManager';

import styles from '@styles/Portfolio.module.scss';

interface Props {
  data?: Portfolios;
}

const Portfolio: React.FC<Props> = ({ data }) => {
  const { fields } = (data?.items && useContentfulLiveUpdates(data.items[0])) || {};

  return (
    <section id="portfolio" className={styles.container}>
      <div>
        <h1 className={styles.mainTitle} data-scroll data-scroll-sticky data-scroll-target="#portfolio">
          {fields?.title}
        </h1>
      </div>
      <div className={styles.wrapper}>
        <CardsManager data={fields?.references} />
      </div>
    </section>
  );
};

export default Portfolio;
