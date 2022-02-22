import CardHeader from './CardHeader';
import CardTags from './CardTags';

import styles from '../../../styles/Portfolio.module.css';

interface Datas {
  name: string;
  logoUrl: string;
  coverUrl: string;
  tags: string[];
}

interface Props {
  direction: 'left' | 'right';
  variant?: 'main' | 'secondary';
  datas: Datas;
}

const Card: React.FC<Props> = ({ direction, variant, datas }) => (
  <div
    data-scroll
    data-scroll-class={styles.isInView}
    data-scroll-direction="horizontal"
    data-scroll-speed={direction === 'left' ? '3' : '-3'}
    data-scroll-repeat
  >
    <article className={`${styles.card} ${variant === 'secondary' ? styles.secondaryColor : ''}`}>
      <CardHeader title={datas.name} url={datas.logoUrl} backgroundUrl={datas.coverUrl} variant={variant} />
      <CardTags tags={datas.tags} />
      <p className={styles.cardContent}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
        minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
      </p>
    </article>
  </div>
);

export default Card;
