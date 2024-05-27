import { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { Skills as SkillsModel } from '@models/SkillsModel';

import List from './components/List';
import Summary from './components/Summary';
import CanvasWrapper from './components/CanvasWrapper';
import AnimatedWaves from './components/AnimatedWaves';

import styles from '@styles/Skills.module.css';

interface Props {
  data?: SkillsModel;
}

const Skills: React.FC<Props> = ({ data }) => {
  const [scale, setScale] = useState(1);
  const containerElmnt = useRef<HTMLDivElement>(null);

  const { scroll } = useLocomotiveScroll();

  const isMobileOrTablet = scroll?.options?.isMobile || scroll?.options?.isTablet;

  const { fields } = (data?.items && useContentfulLiveUpdates(data.items[0])) || {};

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
    <section ref={containerElmnt} id="skills" className={styles.container}>
      <h1
        className={styles.mainTitle}
        style={{ paddingBottom: isMobileOrTablet ? 0 : 150 }}
        data-scroll
        data-scroll-sticky
        data-scroll-target="#skills"
      >
        {fields?.title}
      </h1>
      <div className={styles.contentContainer}>
        <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '2' : '0.5'}>
          <Summary content={fields?.summary} />
        </article>
        <div className={styles.canvasWrapper} data-scroll data-scroll-speed={isLargeScreen ? '3' : '0.5'}>
          <CanvasWrapper scale={scale} />
        </div>
        <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '4' : '0.5'}>
          <List title="Front End" elements={fields?.frontEndTags || []} />
        </article>
        <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '2' : '0.5'}>
          <List title="Back End & DevOps" elements={fields?.backEndTags || []} />
        </article>
        <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '4' : '0.5'}>
          <h1>CV</h1>
          <div className={styles.cvWrapper}>
            <span>👉</span>
            <a href={fields?.cv?.fields?.file?.url} target="_blank" rel="noreferrer">
              {fields?.cv?.fields?.title}
            </a>
            <span>👈</span>
          </div>
        </article>
      </div>
      <AnimatedWaves />
    </section>
  );
};

export default Skills;
