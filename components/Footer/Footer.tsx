import { useLocomotiveScroll } from 'react-locomotive-scroll';

import useTranslation from 'hooks/useTranslation';

import ContactForm from './components/ContactForm';

import styles from 'styles/Footer.module.css';

const Footer: React.FC = () => {
  const { scroll } = useLocomotiveScroll();

  return (
    <footer id="footer" className={styles.container} data-scroll-section>
      <div className={styles.chromeFix} />
      <h1 className={styles.mainTitle}>{useTranslation('contactMe')}</h1>
      <div className={styles.wrapper}>
        <ContactForm />
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
          <nav>
            <h1>Navigation</h1>
            <div>
              <a
                className={styles.button}
                onClick={() => scroll.scrollTo('#top')}
                onKeyDown={() => null}
                role="button"
                tabIndex={0}
              >
                {useTranslation('home')}
              </a>
              <a
                className={styles.button}
                onClick={() => scroll.scrollTo('#portfolio')}
                onKeyDown={() => null}
                role="button"
                tabIndex={0}
              >
                {useTranslation('Portfolio')}
              </a>
              <a
                className={styles.button}
                onClick={() => scroll.scrollTo('#skills')}
                onKeyDown={() => null}
                role="button"
                tabIndex={0}
              >
                {useTranslation('skills')}
              </a>
              <a
                className={styles.button}
                onClick={() => scroll.scrollTo('#footer')}
                onKeyDown={() => null}
                role="button"
                tabIndex={0}
              >
                {useTranslation('contactMe')}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
