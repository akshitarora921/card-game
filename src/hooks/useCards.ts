import { useEffect, useState } from 'react';
import { generateCard } from 'utils/generateCard';
import { isAce } from 'utils/isAce';
import { CardType } from '../types/Card';

const WHOLE_DECK: number[] = [...Array(52)].map((_, i) => i); // creating an array from 0...51
function useCards() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [availableCards, setAvailableCards] = useState<number[] | []>([]);
  const [acesLeft, setAcesLeft] = useState<number>(4);

  useEffect(() => {
    setAvailableCards(WHOLE_DECK);
    setAcesLeft(4);
  }, []);

  const generateRandomCards = (NumberOfCards: number) => {
    const localCards = [];
    let localAvailableCards = availableCards;
    for (let i = 0; i < NumberOfCards; i++) {
      const index = Math.floor(Math.random() * localAvailableCards.length);
      const cardNumber = localAvailableCards[index];
      localAvailableCards = localAvailableCards.filter((card) => card !== cardNumber);
      localCards.push(generateCard(cardNumber));
      if (isAce(cardNumber)) {
        setAcesLeft((preValue) => preValue - 1);
      }
    }
    setAvailableCards(localAvailableCards);
    return localCards;
  };

  const getCards = () => {
    if (availableCards.length < 5) {
      setAcesLeft(0);
      setCards(availableCards.map((card) => generateCard(card)));
      setAvailableCards([]);
      return;
    }
    setCards(generateRandomCards(5));
  };

  const reset = () => {
    setAvailableCards(WHOLE_DECK);
    setAcesLeft(4);
  };

  return { cards, availableCards, acesLeft, getCards, reset };
}

export default useCards;
