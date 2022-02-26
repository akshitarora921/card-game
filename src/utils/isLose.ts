import { CardType } from 'types/Card';

export const isLose = (cards: CardType[], acesLeft: number) => {
  return (cards.length === 2 && !cards.find((card) => card.cardNumber === 'A')) || acesLeft === 0;
};
