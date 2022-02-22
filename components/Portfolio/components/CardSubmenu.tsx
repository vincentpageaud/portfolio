import { useState } from 'react';

import useTranslation from 'hooks/useTranslation';
import Submenu from 'assets/Submenu';

import styles from '../../../styles/Portfolio.module.css';

const CardSubmenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const website = useTranslation('website');

  return (
    <div className={styles.cardSubmenu}>
      <div
        className={styles.subMenuIcon}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        role="button"
        tabIndex={0}
        onKeyDown={() => null}
      >
        <Submenu />
      </div>
      {isOpen && (
        <nav className={styles.submenuWrapper}>
          <ul>
            <li>{website}</li>
            <li>GitHub</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default CardSubmenu;
