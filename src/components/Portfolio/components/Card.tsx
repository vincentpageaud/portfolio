import CardHeader from './CardHeader';
import CardTags from './CardTags';
import { PortfolioModel } from 'models/PortfolioModel';

import styles from '@styles/Portfolio.module.css';
import useTranslationFromArray from '@hooks/useTranslationFromArray';

interface Props {
  direction: 'left' | 'right';
  variant?: 'main' | 'secondary';
  datas: PortfolioModel;
}

const Card: React.FC<Props> = ({ direction, variant, datas }) => {
  const { contents } = useTranslationFromArray(datas.description);

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
          title={datas.name}
          url={datas.logoUrl}
          backgroundUrl={datas.coverUrl}
          variant={variant}
          links={datas.links}
        />
        <div className={styles.type}>{datas.type}</div>
        <CardTags tags={datas.tags} />
        <p className={styles.cardContent}>{contents}</p>
      </article>
    </div>
  );
};

export default Card;
