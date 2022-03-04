import { Canvas } from '@react-three/fiber';

import useTranslation from 'hooks/useTranslation';
import AnimatedSphere from './components/AnimatedSphere';

import styles from '../../styles/Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.container} data-scroll-section>
      <div className={styles.filter}>
        <h1 className={styles.mainTitle} data-scroll data-scroll-sticky data-scroll-target="#skills">
          {useTranslation('skills')}
        </h1>
        <div className={styles.contentContainer}>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed="2">
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
          <div className={styles.canvasWrapper} data-scroll data-scroll-speed="3">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <AnimatedSphere />
            </Canvas>
          </div>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed="4">
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
          <article className={styles.contentWrapper} data-scroll data-scroll-speed="2">
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
          <article className={styles.contentWrapper} data-scroll data-scroll-speed="4">
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
