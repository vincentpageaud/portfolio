import styles from '../../styles/Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.container} data-scroll-section>
      <div>
        <h1 className={styles.mainTitle} data-scroll data-scroll-sticky data-scroll-target="#skills">
          Skills
        </h1>
      </div>
    </section>
  );
};

export default Skills;
