import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

interface Props {
  text?: Document;
}

const RichText: React.FC<Props> = ({ text }) => {
  const renderedDescription = text && renderRichText(text);

  return <>{renderedDescription}</>;
};

export default RichText;
