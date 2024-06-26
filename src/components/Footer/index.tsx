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
          {fields?.socialNetworks?.map((link) => (
            <Button key={link.fields?.title} onClick={() => window.open(link.fields?.url, '_blank')}>
              {link.fields?.title}
            </Button>
          ))}
          <nav>
            <h1>Navigation</h1>
            <div>
              {fields?.navigationMenu?.map((link) => (
                <Button key={link.fields?.title} onClick={() => scroll.scrollTo(link.fields?.url)}>
                  {link.fields?.title}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
