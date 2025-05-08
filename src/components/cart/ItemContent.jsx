import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { SetQuantity } from "./SetQuantity";
import { useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../store/actions";
import toast from "react-hot-toast";
import { formatPrice } from "../../utils/formatPrice";
import { truncateText } from "../../utils/truncateText";

export const ItemContent = ({
  productId,
  productName,
  image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
  cartId,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const dispatch = useDispatch();

  const handleQtyIncrease = (cartItems) => {
    dispatch(
      increaseCartQuantity(
        cartItems,
        toast,
        currentQuantity,
        setCurrentQuantity
      )
    );
  };

  const handleQtyDecrease = (cartItems) => {
    if (currentQuantity > 1) {
      const newQtuantity = currentQuantity - 1;
      setCurrentQuantity(newQtuantity);
      dispatch(decreaseCartQuantity(cartItems, newQtuantity));
    }
  };

  const removeItemFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems, toast))
  };

  return (
    <div className="grid md:grid-cols-5 grid-col-4 md:text-md text-sm gap-4 items-center border-[1px] border-slate-200 rounded-md lg:px-4 py-4 p-2">
      <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
        <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
          <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
            { truncateText(productName) }
          </h3>
        </div>
        <div className="md:w-36 sm:w-24 w-12">
          <img
            src={image}
            alt={productName}
            className="md:h-36 sm:h-24 h-12 w-full object-cover rounded-md"
          />
          <div className="flex items-start gap-5 mt-3">
            <button
              className="flex items-center font-semibold space-x-2 px-4 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-rose-500 hover:text-white transition-colors duration-200"
              onClick={() => removeItemFromCart({
                image,
                productName,
                description,
                specialPrice,
                price,
                productId,
                quantity,
              })}
            >
              <HiOutlineTrash size={16} />
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
        {formatPrice(Number(specialPrice))}
      </div>
      <div className="justify-self-center">
        {
          <SetQuantity
            quantity={currentQuantity}
            cardCounter={true}
            handleQtyIncrease={() =>
              handleQtyIncrease({
                image,
                productName,
                description,
                specialPrice,
                price,
                productId,
                quantity,
              })
            }
            handleQtyDecrese={() => {
              handleQtyDecrease({
                image,
                productName,
                description,
                specialPrice,
                price,
                productId,
                quantity,
              });
            }}
          />
        }
      </div>
      <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
        {formatPrice(Number(currentQuantity) * Number(specialPrice))}
      </div>
    </div>
  );
};
