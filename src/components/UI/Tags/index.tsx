import { CSSProperties } from 'react';

import styles from '@styles/UI/Tags.module.scss';

interface Props {
  tags: string[];
  style?: CSSProperties
}

const Tags: React.FC<Props> = ({ tags, style = {} }) => {
  return (
    <aside>
      <div className={styles.container} style={style}>
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </aside>
  );
};

export default Tags;
