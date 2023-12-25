import { Document } from '@contentful/rich-text-types';

import useTranslation from '@hooks/useTranslation';
import RichText from '@UI/RichText';

interface Props {
  content?: Document;
}

const Summary: React.FC<Props> = ({ content }) => {
  return (
    <>
      <h1>{useTranslation('summary')}</h1>
      <RichText text={content} />
    </>
  );
};

export default Summary;
