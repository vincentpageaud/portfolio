import useTranslation from '@hooks/useTranslation';

interface Props {
  contents: string | string[];
}

const Summary: React.FC<Props> = ({ contents }) => {
  return (
    <>
      <h1>{useTranslation('summary')}</h1>
      {typeof contents === 'string' ? (
        <p>{contents}</p>
      ) : typeof contents !== 'string' ? (
        contents.map((content, index) => <p key={index}>{content}</p>)
      ) : null}
    </>
  );
};

export default Summary;
