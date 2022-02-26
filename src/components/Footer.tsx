import { CardType } from 'types/Card';
import { isLose } from 'utils/isLose';
import { isTie } from 'utils/isTie';
import { isWin } from 'utils/isWin';
import PlayAgainButton from './PlayAgainButton';

type FooterProps = {
  cards: CardType[];
  aceLeft: number;
  reset: () => void;
  getCards: () => void;
};

function Footer({ cards, aceLeft, reset, getCards }: FooterProps) {
  if (isWin(cards)) return <PlayAgainButton reset={reset} />;
  if (isTie(cards))
    return (
      <div className="flex flex-col items-center">
        <p className="text-center text-2xl md:text-3xl my-2 text-white">
          It&lsquo;s a tie. <br />
          It&lsquo;s is Rare
        </p>
        <PlayAgainButton reset={reset} />
      </div>
    );
  if (isLose(cards, aceLeft))
    return (
      <div className="flex flex-col items-center">
        <p className="text-center text-2xl md:text-3xl my-2 text-white">
          You lose. <br />
          Better luck next time!
        </p>
        <PlayAgainButton reset={reset} />
      </div>
    );
  return (
    <>
      <button
        type="button"
        className="bg-yellow-400 hover:bg-yellow-500 text-black py-4 px-6 rounded uppercase text-4xl font-extrabold"
        onClick={() => getCards()}
      >
        Deal
      </button>
      <button
        type="button"
        className="md:absolute bottom-5 right-5 my-4 bg-transparent text-yellow-500 hover:bg-yellow-500 font-bold hover:text-black py-2 px-4 border-2 border-yellow-500 hover:border-transparent rounded-xl"
        onClick={() => reset()}
      >
        Reset
      </button>
    </>
  );
}

export default Footer;
