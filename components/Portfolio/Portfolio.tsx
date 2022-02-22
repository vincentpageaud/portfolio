import CardsManager from './components/CardsManager';

import styles from '../../styles/Portfolio.module.css';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className={styles.container} data-scroll-section>
      <div className={styles.filter}>
        <div>
          <h1 className={styles.mainTitle} data-scroll data-scroll-sticky data-scroll-target="#portfolio">
            Portfolio
          </h1>
        </div>
        <div className={styles.wrapper}>
          <CardsManager />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
