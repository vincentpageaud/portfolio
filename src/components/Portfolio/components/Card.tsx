import Tags from '@UI/Tags';
import RichText from '@UI/RichText';
import { Project } from '@models/PortfoliosModel';

import CardHeader from './CardHeader';

import styles from '@styles/Portfolio.module.scss';

interface Props {
  direction: 'left' | 'right';
  variant?: 'main' | 'secondary';
  datas: Project;
}

const Card: React.FC<Props> = ({ direction, variant, datas }) => {
  const { description, links, logo, preview, tags, title, type } = datas.fields;

  return (
    <div
      data-scroll
      data-scroll-class={styles.isInView}
      data-scroll-direction="horizontal"
      data-scroll-speed={direction === 'left' ? '3' : '-3'}
      data-scroll-repeat
    >
      <article className={`${styles.card} ${variant === 'secondary' ? styles.secondaryColor : ''}`}>
        <CardHeader
          title={title}
          url={logo && `https:${logo.fields.file.url}`}
          backgroundUrl={preview && `https:${preview.fields.file.url}`}
          variant={variant}
          links={links}
        />
        <div className={styles.type}>{type}</div>
        {tags && <Tags tags={tags} />}
        <div className={styles.cardContent}>
          <RichText text={description} />
        </div>
      </article>
    </div>
  );
};

export default Card;
