import Image from 'next/image';

import CardSubmenu from './CardSubmenu';

import styles from '@styles/Portfolio.module.scss';

interface Props {
  git?: string;
  title?: string;
  url?: string;
  backgroundUrl?: string;
  variant?: string;
  website?: string;
}

const CardHeader: React.FC<Props> = ({ git, title, url, backgroundUrl, variant, website }) => {
  return (
    <header>
      <div className={styles.coverPicture} style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <div className={styles.cardHeader}>
          <div
            className={styles.logoWrapper}
            style={{ borderColor: variant === 'secondary' ? 'var(--secondary-color)' : '' }}
          >
            {url && <Image width={110} height={110} src={url} alt={title} />}
          </div>
          {<CardSubmenu git={git} website={website} />}
        </div>
      </div>
      <h1 className={styles.cardTitle}>{title}</h1>
    </header>
  );
};

export default CardHeader;
