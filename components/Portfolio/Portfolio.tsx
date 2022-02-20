import styles from '../../styles/Portfolio.module.css';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className={styles.container} data-scroll-section>
      <div>
        <h1 className={styles.mainTitle} data-scroll data-scroll-sticky data-scroll-target="#portfolio">
          Portfolio
        </h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card} data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
          minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
        </div>
        <div className={styles.card} data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
          minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
        </div>
        <div className={styles.card} data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
          minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
        </div>
        <div className={styles.card} data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
          minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
        </div>
        <div className={styles.card} data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
          minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
        </div>
        <div className={styles.card} data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
          minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
