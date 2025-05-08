const buttonStyles = "hover:cursor-pointer disabled:cursor-default border-[1.2px] border-slate-800 px-3 py1 rounded flex items-center text-center ";
export const SetQuantity = ({
  quantity,
  cardCounter,
  handleQtyIncrease,
  handleQtyDecrese,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cardCounter ? null : <div className="font-semibold">Quantity</div>}
      <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[24px] text-sm">
        <button disabled={quantity <= 1} className={buttonStyles} onClick={handleQtyDecrese}>
          -
        </button>
        <div className="text-red-500">{quantity}</div>
        <button className={buttonStyles} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
};
