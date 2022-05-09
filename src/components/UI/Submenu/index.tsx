import { useState } from 'react';



import SubmenuIcon from '@assets/Submenu';

import styles from "@styles/UI/Submenu.module.scss";

const Submenu: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.iconContainer}>
      <div
        className={styles.icon}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        role="button"
        tabIndex={0}
        onKeyDown={() => null}
      >
        <SubmenuIcon />
      </div>
      {isOpen && (
        <nav className={styles.submenuWrapper}>
          {children}
        </nav>
      )}
    </div>
  );
}

export default Submenu;