import styles from '../../../styles/Portfolio.module.css';

interface Props {
  direction: 'left' | 'right';
  variant?: 'main' | 'secondary';
}

const Card: React.FC<Props> = ({ direction, variant }) => (
  <div
    data-scroll
    data-scroll-class={styles.isInView}
    data-scroll-direction="horizontal"
    data-scroll-speed={direction === 'left' ? '3' : '-3'}
    data-scroll-repeat
  >
    <div className={`${styles.card} ${variant === 'secondary' ? styles.secondaryColor : ''}`}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
      minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
    </div>
  </div>
);

export default Card;
