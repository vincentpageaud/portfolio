import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import useTranslation from 'hooks/useTranslation';
import AnimatedSphere from './components/AnimatedSphere';

import styles from '../../styles/Skills.module.css';

const Skills: React.FC = () => {
  const [scale, setScale] = useState(1);
  const containerElmnt = useRef<HTMLDivElement>(null);

  const setCanvasScale: (width?: number) => void = (width) => {
    if (width && width > 1200) {
      setScale(1);
    } else {
      setScale(2.4);
    }
  };

  useEffect(() => {
    // Initial value
    setCanvasScale(containerElmnt.current?.clientWidth);

    // On resize
    const checkClientWidth: () => void = () => setCanvasScale(containerElmnt.current?.clientWidth);
    window.addEventListener('resize', checkClientWidth);

    return () => window.removeEventListener('resize', checkClientWidth);
  }, []);

  return (
    <section ref={containerElmnt} id="skills" className={styles.container} data-scroll-section>
      <div className={styles.filter}>
        <h1 className={styles.mainTitle} data-scroll data-scroll-sticky data-scroll-target="#skills">
          {useTranslation('skills')}
        </h1>
        <div className={styles.contentContainer}>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={scale === 1 ? '2' : '0.5'}>
            <h1>{useTranslation('summary')}</h1>
            <p>
              Développeur Freelance passionné, en sortie d&apos;école, j&apos;ai pu acquérir de nombreuses compétences à
              partir de mes projets d&apos;études, mes capacités autodidactes, ainsi que de mes deux ans dans une
              entreprise orientée vers le divertissement à bord (Trains, avions, Ferry, etc.). J&apos;ai donc pu
              travailler avec de nombreux outils afin de réaliser des cartes interactives, lecteurs vidéo et musique,
              liseuses de presse, etc.
            </p>
            <p>
              J&apos;ai choisi de travailler en tant que Freelance pour développer et acquérir de nouvelles compétences,
              motivé et méticuleux, je saurais vous apportez mon savoir-faire.
            </p>
          </article>
          <div className={styles.canvasWrapper} data-scroll data-scroll-speed={scale === 1 ? '3' : '0.5'}>
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <AnimatedSphere scale={scale} />
            </Canvas>
          </div>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={scale === 1 ? '4' : '0.5'}>
            <h1>Front End</h1>
            <ul>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
              <li>React</li>
            </ul>
          </article>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={scale === 1 ? '2' : '0.5'}>
            <h1>Back End</h1>
            <ul>
              <li>NodeJS</li>
              <li>NodeJS</li>
              <li>NodeJS</li>
              <li>NodeJS</li>
              <li>NodeJS</li>
              <li>NodeJS</li>
              <li>NodeJS</li>
            </ul>
          </article>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={scale === 1 ? '4' : '0.5'}>
            <h1>CV</h1>
            <a href="/CV.pdf" download="vincent_pageaud.pdf">
              Télécharger le CV
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
