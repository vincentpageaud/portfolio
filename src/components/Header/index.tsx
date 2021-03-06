import { useLocomotiveScroll } from 'react-locomotive-scroll';

import useTranslation from '@hooks/useTranslation';
import use100vh from '@hooks/use100vh';
import LanguageSelector from '@UI/LanguageSelector';

import styles from '@styles/Header.module.css';

const Header: React.FC = () => {
  const height = use100vh();
  const { scroll } = useLocomotiveScroll();

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
              <h1>Vincent Pageaud</h1>
            </div>
            <div data-scroll data-scroll-speed="4">
              <h2>{useTranslation('mainTitle')}</h2>
            </div>
            <div
              className={styles.buttonWrapper}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="5"
              data-scroll-position="left"
            >
              <div className={styles.button} onClick={onClick} onKeyDown={() => null} role="button" tabIndex={0}>
                {useTranslation('learnMore')}
              </div>
            </div>
          </div>
          <div className={styles.pictureWrapper} data-scroll data-scroll-speed="10">
            <div className={styles.picture}>
              <div className={styles.filter} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
