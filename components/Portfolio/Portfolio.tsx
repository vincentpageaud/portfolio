import styles from '../../styles/Portfolio.module.css';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className={styles.container} data-scroll-section>
      <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="4">
        <h1>Coming soon</h1>
      </div>
    </section>
  );
};

export default Portfolio;
