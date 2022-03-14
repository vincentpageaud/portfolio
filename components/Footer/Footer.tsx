import useTranslation from 'hooks/useTranslation';

import ContactForm from './components/ContactForm';

import styles from 'styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container} data-scroll-section>
      <h1 className={styles.mainTitle}>{useTranslation('contactMe')}</h1>
      <div className={styles.wrapper}>
        <ContactForm />
        <div className={styles.extLinks}></div>
      </div>
    </footer>
  );
};

export default Footer;
