import { ReactNode } from 'react';

import styles from '@styles/Content.module.scss';

const Content: React.FC<ReactNode> = ({ children }) => {
  return (
    <main className={styles.container} data-scroll-section>
      <div className={styles.filter}>{children}</div>
    </main>
  );
};

export default Content;
