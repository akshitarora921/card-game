import { CardType } from 'types/Card';

export const isTie = (cards: CardType[]) => {
  return cards.length === 2 && cards[0].cardNumber === 'A' && cards[1].cardNumber === 'A';
};
