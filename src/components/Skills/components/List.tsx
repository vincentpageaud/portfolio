import Tags from "@UI/Tags";

interface Props {
  title: string;
  elements: string[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <>
      <h1>{title}</h1>
      <Tags tags={elements} style={{ margin: 0 }} />
    </>
  );
};

export default List;
