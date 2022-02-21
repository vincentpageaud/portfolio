import styles from '../../../styles/Portfolio.module.css';

interface Props {
  direction: 'left' | 'right';
}

const Card: React.FC<Props> = ({ direction }) => (
  <div
    data-scroll
    data-scroll-class={styles.isInView}
    data-scroll-direction="horizontal"
    data-scroll-speed={direction === 'left' ? '3' : '-3'}
    data-scroll-repeat
  >
    <div className={styles.card}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo ut obcaecati sapiente sit non labore
      minus aliquid. Consequatur, consectetur et minus asperiores a sunt doloremque nulla explicabo facere esse!
    </div>
  </div>
);

export default Card;
