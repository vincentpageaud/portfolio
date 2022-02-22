import styles from '../../../styles/Portfolio.module.css';

interface Props {
  tags: string[];
}

const CardTags: React.FC<Props> = ({ tags }) => {
  return (
    <aside>
      <div className={styles.tagsWrapper}>
        {tags.map((tag) => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CardTags;
