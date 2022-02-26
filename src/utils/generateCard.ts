import { CARDS } from 'constants/cards';
import { SUITS } from 'constants/suits';
import club from '../assets/Clover.svg';
import diamond from '../assets/Diamond.svg';
import heart from '../assets/Heart.svg';
import spade from '../assets/Spade.svg';

export const generateCard = (number: number) => {
  let image;
  let color = 'text-black';
  const suit = SUITS[Math.floor(number / 13)];
  const cardNumber = CARDS[number % 13];
  if (suit === 'Spades') {
    image = spade;
  } else if (suit === 'Diamonds') {
    image = diamond;
    color = 'text-red-500';
  } else if (suit === 'Hearts') {
    image = heart;
    color = 'text-red-500';
  } else {
    image = club;
  }
  return {
    cardNumber,
    image,
    color,
  };
};
