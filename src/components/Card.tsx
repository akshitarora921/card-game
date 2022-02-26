import { useEffect, useRef } from 'react';
import { CLASSNAMES } from 'constants/classnames';
import classNames from 'utils/classNames';

type CardProps = {
  cardNumber: string;
  image: string;
  color: string;
  index: number;
  length: number;
};

const Card = ({ cardNumber, image, color, index, length }: CardProps) => {
  const className = length >= 3 ? CLASSNAMES[index] : 'translate-y-0 rotate-0';
  const card = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    card.current?.classList.remove(
      ...CLASSNAMES[0].split(' '),
      ...CLASSNAMES[1].split(' '),
      '-translate-y-full',
      'opacity-0'
    );
    card.current?.classList.add(...className.split(' '));
  }, [className]);
  return (
    <div
      ref={card}
      className={classNames(
        'relative bg-white w-28 md:w-44 h-36 md:h-56 rounded-3xl p-3 transform hover:shadow-2xl -translate-y-full opacity-0'
      )}
    >
      <p data-id="cardNumber" className={classNames('text-3xl font-extrabold md:text-6xl', color)}>
        {cardNumber}
      </p>
      <img
        className="absolute top-13 md:top-20 left-3 md:left-4 h-5 w-5 md:h-8 md:w-8 "
        src={image}
        alt="React"
      />
      <img
        className="absolute bottom-4 md:bottom-8 right-4 md:right-8 h-10 md:h-16 w-10 md:w-16 mx-auto"
        src={image}
        alt="React"
      />
    </div>
  );
};

export default Card;
