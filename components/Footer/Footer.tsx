import AnimatedWaves from './components/AnimatedWaves';

import styles from 'styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container} data-scroll-section>
      <AnimatedWaves />
    </footer>
  );
};

export default Footer;
