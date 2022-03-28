import { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import useTranslation from 'hooks/useTranslation';
import useTranslationFromArray from 'hooks/useTranslationFromArray';
import List from './components/List';
import Summary from './components/Summary';
import CanvasWrapper from './components/CanvasWrapper';
import AnimatedWaves from './components/AnimatedWaves';
import skillsConf from 'configurations/skills';

import styles from '../../styles/Skills.module.css';

const Skills: React.FC = () => {
  const [scale, setScale] = useState(1);
  const containerElmnt = useRef<HTMLDivElement>(null);

  const { scroll } = useLocomotiveScroll();

  const isMobileOrTablet = scroll?.options?.isMobile || scroll?.options?.isTablet;

  const { contents: summaryContent } = useTranslationFromArray(skillsConf.summary);
  const { title: cvTitle } = useTranslationFromArray(skillsConf.cvUrl);

  const isLargeScreen = scale === 1;

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
        <h1
          className={styles.mainTitle}
          style={{ paddingBottom: isMobileOrTablet ? 0 : 100 }}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#skills"
        >
          {useTranslation('skills')}
        </h1>
        <div className={styles.contentContainer}>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '2' : '0.5'}>
            {summaryContent && <Summary contents={summaryContent} />}
          </article>
          <div className={styles.canvasWrapper} data-scroll data-scroll-speed={isLargeScreen ? '3' : '0.5'}>
            <CanvasWrapper scale={scale} />
          </div>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '4' : '0.5'}>
            <List title="Front End" elements={skillsConf.frontEnd} />
          </article>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '2' : '0.5'}>
            <List title="Back End" elements={skillsConf.backEnd} />
          </article>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '4' : '0.5'}>
            <h1>CV</h1>
            <a href={process.env.CV_URL} target="_blank" rel="noreferrer">
              {cvTitle}
            </a>
          </article>
        </div>
        <AnimatedWaves />
      </div>
    </section>
  );
};

export default Skills;
