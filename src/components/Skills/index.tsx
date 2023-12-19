import { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import skillsConf from '@configs/skills';
import { Skills as SkillsModel } from '@models/SkillsModel';

import useTranslationFromArray from '@hooks/useTranslationFromArray';
import List from './components/List';
import Summary from './components/Summary';
import CanvasWrapper from './components/CanvasWrapper';
import AnimatedWaves from './components/AnimatedWaves';

import styles from '@styles/Skills.module.css';

interface Props {
  data: SkillsModel;
}

const Skills: React.FC<Props> = ({ data }) => {
  const [scale, setScale] = useState(1);
  const containerElmnt = useRef<HTMLDivElement>(null);

  const { scroll } = useLocomotiveScroll();

  const isMobileOrTablet = scroll?.options?.isMobile || scroll?.options?.isTablet;

  const content = useContentfulLiveUpdates(data.items[0]);

  const { contents: summaryContent } = useTranslationFromArray(skillsConf.summary);

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
          style={{ paddingBottom: isMobileOrTablet ? 0 : 150 }}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#skills"
        >
          {content?.fields.title}
        </h1>
        <div className={styles.contentContainer}>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '2' : '0.5'}>
            {summaryContent && <Summary contents={summaryContent} />}
          </article>
          <div className={styles.canvasWrapper} data-scroll data-scroll-speed={isLargeScreen ? '3' : '0.5'}>
            <CanvasWrapper scale={scale} />
          </div>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '4' : '0.5'}>
            <List title="Front End" elements={content?.fields.frontEndTags || []} />
          </article>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '2' : '0.5'}>
            <List title="Back End" elements={content?.fields.backEndTags || []} />
          </article>
          <article className={styles.contentWrapper} data-scroll data-scroll-speed={isLargeScreen ? '4' : '0.5'}>
            <h1>CV</h1>
            <a href={content?.fields.cv?.fields.file.url} target="_blank" rel="noreferrer">
              {content?.fields.cv?.fields.title}
            </a>
          </article>
        </div>
        <AnimatedWaves />
      </div>
    </section>
  );
};

export default Skills;
