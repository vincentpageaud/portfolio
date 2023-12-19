import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import use100vh from '@hooks/use100vh';
import LanguageSelector from '@UI/LanguageSelector';
import { Headers } from '@models/HeadersModel';

import styles from '@styles/Header.module.css';

interface Props {
  data: Headers;
}

const Header: React.FC<Props> = ({ data }) => {
  const height = use100vh();
  const { scroll } = useLocomotiveScroll();

  const content = useContentfulLiveUpdates(data.items[0]);

  const onClick = (): void => {
    scroll.scrollTo('#portfolio');
  };

  return (
    <header id="top" className={styles.background} data-scroll-section>
      <div className={styles.container}>
        <LanguageSelector />
        <div className={styles.wrapper} style={{ height }}>
          <div className={styles.text}>
            <div data-scroll data-scroll-speed="1">
              <h1>{content?.fields.name}</h1>
            </div>
            <div data-scroll data-scroll-speed="4">
              <h2>{content?.fields.title}</h2>
            </div>
            <div
              className={styles.buttonWrapper}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="5"
              data-scroll-position="left"
            >
              <div className={styles.button} onClick={onClick} onKeyDown={() => null} role="button" tabIndex={0}>
                {content?.fields.buttonName}
              </div>
            </div>
          </div>
          <div className={styles.pictureWrapper} data-scroll data-scroll-speed="10">
            <div
              className={styles.picture}
              style={{ backgroundImage: `url(https:${content?.fields.profilePicture.fields.file.url})` }}
            >
              <div className={styles.filter} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
