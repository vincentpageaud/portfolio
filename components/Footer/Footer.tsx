import useTranslation from 'hooks/useTranslation';

// import ContactForm from './components/ContactForm';

import styles from 'styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container} data-scroll-section>
      <div className={styles.chromeFix} />
      <h1 className={styles.mainTitle}>{useTranslation('contactMe')}</h1>
      <div className={styles.wrapper}>
        {/* <ContactForm /> */}
        <hr />
        <div className={styles.extLinks}>
          <h1>{useTranslation('myNetworks')}</h1>
          <p>
            <a
              className={styles.button}
              href="https://www.linkedin.com/in/vincentpageaud/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={styles.button}
              href="https://www.malt.fr/profile/vincentpageaud"
              target="_blank"
              rel="noreferrer"
            >
              Malt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
