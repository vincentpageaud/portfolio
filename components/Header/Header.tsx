import { useLocomotiveScroll } from 'react-locomotive-scroll';

import useTranslation from 'hooks/useTranslation';
import use100vh from 'hooks/use100vh';

import styles from '../../styles/Header.module.css';

const Header: React.FC = () => {
  const height = use100vh();
  const { scroll } = useLocomotiveScroll();

  const onClick = (): void => {
    scroll.scrollTo('#portfolio');
  };

  return (
    <header className={styles.container} data-scroll-section>
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
            data-scroll-speed="8"
            data-scroll-position="left"
          >
            <div className={styles.button} onClick={onClick} onKeyDown={() => null} role="button" tabIndex={0}>
              {useTranslation('learnMore')}
            </div>
          </div>
        </div>
        <div className={styles.picture} data-scroll data-scroll-speed="10">
          <div className={styles.filter} />
        </div>
      </div>
    </header>
  );
};

export default Header;
