import styles from 'styles/Footer.module.css';

const AnimatedWaves: React.FC = () => {
  return (
    <div className={styles.wavesContainer}>
      <svg
        className={styles.wavesWrapper}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
                58-18 88-18s
                58 18 88 18 
                58-18 88-18 
                58 18 88 18
                v44h-352z"
          />
        </defs>
        <g className={styles.waves}>
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="#21606a" />
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="var(--secondary-color)" />
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="#185275" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedWaves;
