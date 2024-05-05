import { Project } from '@models/PortfoliosModel';

import Card from './Card';

interface Props {
  data?: Project[];
}

const CardsManager: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data?.map((card, index) => {
        const isPair = index - (1 % 2) === 0 ? true : false;
        return isPair ? (
          <Card key={card.sys.id} direction="left" variant="secondary" datas={card} />
        ) : (
          <Card key={card.sys.id} direction="right" datas={card} />
        );
      })}
    </>
  );
};

export default CardsManager;
