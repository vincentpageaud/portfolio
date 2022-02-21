import useTranslation from 'hooks/useTranslation';

import styles from '../../styles/Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.container} data-scroll-section>
      <div className={styles.filter}>
        <h1 className={styles.mainTitle} data-scroll data-scroll-sticky data-scroll-target="#skills">
          {useTranslation('skills')}
        </h1>
      </div>
    </section>
  );
};

export default Skills;
