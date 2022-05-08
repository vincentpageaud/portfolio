import styles from '@styles/UI/Tags.module.scss';

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <aside>
      <div className={styles.container}>
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </aside>
  );
};

export default Tags;
