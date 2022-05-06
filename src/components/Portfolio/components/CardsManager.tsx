import Card from './Card';
import portfolioConf from '@configs/portfolio';
import { PortfolioModel } from '@models/PortfolioModel';

const CardsManager: React.FC = () => {
  const cards = Object.values(portfolioConf) as PortfolioModel[];

  return (
    <>
      {cards.map((card, index) => {
        const isPair = index - (1 % 2) === 0 ? true : false;
        return isPair ? (
          <Card key={card.name} direction="right" variant="secondary" datas={card} />
        ) : (
          <Card key={card.name} direction="left" datas={card} />
        );
      })}
    </>
  );
};

export default CardsManager;
