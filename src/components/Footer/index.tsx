import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import useTranslation from '@hooks/useTranslation';
import Button from '@UI/Button';
import { Footers as FootersModel } from '@models/FootersModel';

import ContactForm from './components/ContactForm';

import styles from '@styles/Footer.module.scss';

interface Props {
  data?: FootersModel;
}

const Footer: React.FC<Props> = ({ data }) => {
  const { scroll } = useLocomotiveScroll();

  const { fields } = (data?.items && useContentfulLiveUpdates(data.items[0])) || {};

  return (
    <footer id="footer" className={styles.container} data-scroll-section>
      <div className={styles.chromeFix} />
      <h1 className={styles.mainTitle}>{fields?.title}</h1>
      <div className={styles.wrapper}>
        <ContactForm />
        <hr />
        <div className={styles.extLinks}>
          <h1>{useTranslation('myNetworks')}</h1>
          <Button onClick={() => window.open('https://www.linkedin.com/in/vincentpageaud/', '_blank')}>LinkedIn</Button>
          <Button onClick={() => window.open('https://www.malt.fr/profile/vincentpageaud', '_blank')}>Malt</Button>
          <Button onClick={() => window.open('https://github.com/vincentpageaud', '_blank')}>GitHub</Button>
          <nav>
            <h1>Navigation</h1>
            <div>
              <Button onClick={() => scroll.scrollTo('#top')}>{useTranslation('home')}</Button>
              <Button onClick={() => scroll.scrollTo('#portfolio')}>{useTranslation('Portfolio')}</Button>
              <Button onClick={() => scroll.scrollTo('#skills')}>{useTranslation('skills')}</Button>
              <Button onClick={() => scroll.scrollTo('#footer')}>{useTranslation('contactMe')}</Button>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
