// import dynamic from 'next/dynamic';

import AnimatedWaves from './components/AnimatedWaves';

import styles from 'styles/Footer.module.css';

// const Map = dynamic(() => import('./components/Map'), {
//   ssr: false,
// });

const Footer: React.FC = () => {
  return (
    <footer className={styles.container} data-scroll-section>
      <AnimatedWaves />
      {/* <Map /> */}
    </footer>
  );
};

export default Footer;
