import Submenu from '@UI/Submenu';
import useTranslation from '@hooks/useTranslation';

interface Props {
  git?: string;
  website?: string;
}

const CardSubmenu: React.FC<Props> = ({ git, website }) => {
  const websiteWording = useTranslation('website');

  if (git || website) {
    return (
      <Submenu>
        <ul>
          {website && (
            <a href={website} target="_blank" rel="noreferrer">
              <li>{websiteWording}</li>
            </a>
          )}
          {git && (
            <a href={git} target="_blank" rel="noreferrer">
              <li>GitHub</li>
            </a>
          )}
        </ul>
      </Submenu>
    );
  }

  return <div />
};

export default CardSubmenu;
