import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

import styles from '../../../styles/Portfolio.module.css';

interface Datas {
  name: string;
  logoUrl: string;
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
      <CardHeader
        title={datas.name}
        url={datas.logoUrl}
        backgroundUrl="https://picsum.photos/800/600"
        variant={variant}
      />
      <p className={styles.cardContent}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
        minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
      </p>
      <CardFooter tags={['TypeScript', 'React', 'NodeJS', 'Material UI']} />
    </article>
  </div>
);

export default Card;
