import Submenu from '@UI/Submenu';
import useTranslation from '@hooks/useTranslation';
import { Links } from '@models/PortfolioModel';

interface Props {
  links: Links;
}

const CardSubmenu: React.FC<Props> = ({ links }) => {
  const website = useTranslation('website');
  return (
    <Submenu>
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
    </Submenu>
  )
};

export default CardSubmenu;
