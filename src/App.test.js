import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import App from 'App';
import diamond from 'assets/Diamond.svg';
import spade from 'assets/Spade.svg';
import Card from 'components/Card';
import PlayAgainButton from 'components/PlayAgainButton';
import { CARDS } from 'constants/cards';
import classNames from 'utils/classNames';
import { generateCard } from 'utils/generateCard';
import { isAce } from 'utils/isAce';
import { isLose } from 'utils/isLose';
import { isTie } from 'utils/isTie';
import { isWin } from 'utils/isWin';

describe('ToggleComponent', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Should be true', () => {
    const test = true;
    expect(test).toBe(true);
  });
});
describe('Cards Test', () => {
  it('Card number should be valid.', () => {
    const { root } = create(
      <Card cardNumber="Q" color="text-black" image={spade} index={1} length={5} />
    );
    const element = root.findByType('p');
    expect(CARDS.includes(element.props.children)).toBe(true);
  });
  it('Card number should be invalid.', () => {
    const { root } = create(
      <Card cardNumber="12" color="text-black" image={spade} index={1} length={5} />
    );
    const element = root.findByType('p');
    expect(CARDS.includes(element.props.children)).toBe(false);
  });
});
describe('IsAce Function', () => {
  it('Number 2 is not an Ace', () => {
    expect(isAce(2)).toBe(false);
  });
  it('Number 13 is  an Ace', () => {
    expect(isAce(13)).toBe(true);
  });
  it('Number 0 is  an Ace', () => {
    expect(isAce(0)).toBe(true);
  });
});
describe('generateCard Function', () => {
  it('Number 0 is not an Ace of spades', () => {
    expect(generateCard(0)).toEqual({
      cardNumber: 'A',
      image: spade,
      color: 'text-black',
    });
  });

  it('Number 13 is not an Ace of diamonds', () => {
    expect(generateCard(13)).toEqual({
      cardNumber: 'A',
      image: diamond,
      color: 'text-red-500',
    });
  });
});

describe('PlayAgainButton component', () => {
  it('it shows the expected text as Play Again)', () => {
    const component = create(<PlayAgainButton />);
    const instance = component.root;
    const button = instance.findByType('button');
    expect(button.props.children).toBe('Play Again');
  });
});

describe('classNames function test', () => {
  it('concat two classnames with space)', () => {
    expect(classNames('a', 'b')).toBe('a b');
  });
});

describe('Result functions tests', () => {
  it('IsWin returns true if one card is Ace from last 2 cards', () => {
    const cards = [
      {
        cardNumber: 'A',
        image: diamond,
        color: 'text-red-500',
      },
      {
        cardNumber: '2',
        image: diamond,
        color: 'text-red-500',
      },
    ];
    expect(!!isWin(cards)).toBe(true);
  });
  it('IsWin returns true if no card is Ace from last 2 cards', () => {
    const cards = [
      {
        cardNumber: '5',
        image: diamond,
        color: 'text-red-500',
      },
      {
        cardNumber: '2',
        image: diamond,
        color: 'text-red-500',
      },
    ];
    expect(!!isWin(cards)).toBe(false);
  });
  it('IsLose returns true if aceLeft is 0', () => {
    const cards = [
      {
        cardNumber: '2',
        image: diamond,
        color: 'text-red-500',
      },
      {
        cardNumber: '2',
        image: diamond,
        color: 'text-red-500',
      },
    ];
    expect(!!isLose(cards, 0)).toBe(true);
  });
  it('IsTie returns true if both card Aces from last 2 cards', () => {
    const cards = [
      {
        cardNumber: 'A',
        image: diamond,
        color: 'text-red-500',
      },
      {
        cardNumber: 'A',
        image: spade,
        color: 'text-black',
      },
    ];
    expect(!!isTie(cards)).toBe(true);
  });
});
