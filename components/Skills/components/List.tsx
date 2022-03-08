interface Props {
  title: string;
  elements: string[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {elements.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
