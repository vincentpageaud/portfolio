import { Canvas } from '@react-three/fiber';

import useTranslation from 'hooks/useTranslation';
import AnimatedSphere from './components/AnimatedSphere';

import styles from '../../styles/Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.container} data-scroll-section>
      <div className={styles.canvasWrapper} data-scroll data-scroll-speed="3">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>
      <div className={styles.filter}>
        <h1 className={styles.mainTitle} data-scroll data-scroll-sticky data-scroll-target="#skills">
          {useTranslation('skills')}
        </h1>
        <div className={styles.contentContainer}>
          <div className={styles.contentWrapper} data-scroll data-scroll-speed="2">
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className={styles.contentWrapper} data-scroll data-scroll-speed="4">
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className={styles.contentWrapper} data-scroll data-scroll-speed="4">
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className={styles.contentWrapper} data-scroll data-scroll-speed="2">
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
