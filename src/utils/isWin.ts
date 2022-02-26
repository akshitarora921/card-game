import { CardType } from 'types/Card';

export const isWin = (cards: CardType[]) => {
  return cards.length === 2 && cards.find((card) => card.cardNumber === 'A');
};
