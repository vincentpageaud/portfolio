import styles from '../../../styles/Portfolio.module.css';

interface Props {
  tags: string[];
}

const CardFooter: React.FC<Props> = ({ tags }) => {
  return (
    <footer>
      <div className={styles.tagsWrapper}>
        {tags.map((tag) => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default CardFooter;
