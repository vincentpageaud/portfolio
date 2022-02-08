import styles from '../../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.container} data-scroll-section>
      <div data-scroll data-scroll-speed="3">
        Test
      </div>
      <div data-scroll data-scroll-speed="1">
        Test2
      </div>
    </header>
  );
};

export default Header;
