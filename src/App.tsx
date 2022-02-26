import React from 'react';
import Card from 'components/Card';
import Footer from 'components/Footer';
import useCards from 'hooks/useCards';
import { CardType } from 'types/Card';
import { isWin } from 'utils/isWin';
import winner from './assets/winner.svg';

const App: React.FC = () => {
  const { availableCards, acesLeft, getCards, cards, reset } = useCards();

  if (availableCards.length === 52) {
    getCards();
  }

  return (
    <div className="relative flex flex-col p-3 md:p-10 min-h-screen items-center justify-between bg-gradient-to-t from-black via-black/50 to-my-green">
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          <div className="bg-black text-white px-8 py-6 text-center border-2 border-yellow-300">
            <span className="text-4xl">{availableCards.length}</span>
            <br />
            Cards Left
          </div>
          <div className="bg-black text-white px-8 py-6 text-center border-2 border-yellow-300">
            <span className="text-4xl">{acesLeft}</span>
            <br />
            Aces Left
          </div>
        </div>
        {isWin(cards) && <img className="h-10 md:h-16 mt-2 w-full" src={winner} alt="React" />}
      </div>
      <div className="flex h-max gap-8 flex-wrap justify-center my-10">
        {cards?.map((card: CardType, index: number, totalCards: CardType[]) => (
          <Card {...card} index={index} key={index} length={totalCards.length} />
        ))}
      </div>
      <Footer cards={cards} aceLeft={acesLeft} reset={reset} getCards={getCards} />
    </div>
  );
};

export default App;
