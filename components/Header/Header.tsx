import useTranslation from 'hooks/useTranslation';

import styles from '../../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.container} data-scroll-section>
      <div className={styles.text}>
        <div data-scroll data-scroll-speed="1">
          <h1>Vincent Pageaud</h1>
        </div>
        <div data-scroll data-scroll-speed="4">
          <h2>{useTranslation('mainTitle')}</h2>
        </div>
      </div>
      <div className={styles.picture} data-scroll data-scroll-speed="10" />
    </header>
  );
};

export default Header;
