import Image from 'next/image';
import CardSubmenu from './CardSubmenu';

import styles from '../../../styles/Portfolio.module.css';

interface Props {
  title: string;
  url: string;
  backgroundUrl: string;
  variant?: string;
}

const CardHeader: React.FC<Props> = ({ title, url, backgroundUrl, variant }) => {
  return (
    <header>
      <div className={styles.coverPicture} style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <div className={styles.cardHeader}>
          <div
            className={styles.logoWrapper}
            style={{ borderColor: variant === 'secondary' ? 'var(--secondary-color)' : '' }}
          >
            <Image width={110} height={110} src={url} alt={title} />
          </div>
          <CardSubmenu />
        </div>
      </div>
      <h1 className={styles.cardTitle}>{title}</h1>
    </header>
  );
};

export default CardHeader;
