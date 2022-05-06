import { useState } from 'react';

import useTranslation from '@hooks/useTranslation';
import Submenu from 'assets/Submenu';
import { Links } from 'models/PortfolioModel';

import styles from '@styles/Portfolio.module.css';

interface Props {
  links: Links;
}

const CardSubmenu: React.FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const website = useTranslation('website');

  return (
    <div className={styles.cardSubmenu}>
      <div
        className={styles.subMenuIcon}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 120)}
        role="button"
        tabIndex={0}
        onKeyDown={() => null}
      >
        <Submenu />
      </div>
      {isOpen && (
        <nav className={styles.submenuWrapper}>
          <ul>
            {links.website && (
              <a href={links.website} target="_blank" rel="noreferrer">
                <li>{website}</li>
              </a>
            )}
            {links.git && (
              <a href={links.git.url} target="_blank" rel="noreferrer">
                <li>{links.git.host}</li>
              </a>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default CardSubmenu;
