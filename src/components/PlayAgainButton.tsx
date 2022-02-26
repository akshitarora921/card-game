type PlayAgainButtonProps = {
  reset: () => void;
};
function PlayAgainButton({ reset }: PlayAgainButtonProps) {
  return (
    <button
      type="button"
      className="bg-transparent text-yellow-500 hover:bg-yellow-500 hover:text-black border-2 border-yellow-500 hover:border-transparent rounded-xl py-4 px-6 uppercase text-4xl font-extrabold"
      onClick={() => reset()}
    >
      Play Again
    </button>
  );
}

export default PlayAgainButton;
