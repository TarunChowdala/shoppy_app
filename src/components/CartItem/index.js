import { useState } from "react";

import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import "./index.css";

const CartItem = (props) => {
  const [itemCount, setItemCount] = useState(1);
  const { eachItem, deleteCartItem } = props;
  const { description, id, image, price, rating, title } = eachItem;

  const onIncrementCount = () => {
    setItemCount((prevState) => itemCount + 1);
  };
  const onDecrementCount = () => {
    setItemCount((prevState) => {
      if (itemCount > 1) {
        return itemCount - 1;
      }
      return itemCount;
    });
  };

  const onClickDeleteCartItem = () => {
    deleteCartItem(id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-inner-container">
        <div className="cart-image-container">
          <img src={image} className="cart-item-img" alt={title} />
          <div className="item-increment-container">
            <CiSquareMinus
              onClick={onDecrementCount}
              className="cart-item-icons"
            />
            <p className="item-count">{itemCount}</p>
            <CiSquarePlus
              onClick={onIncrementCount}
              className="cart-item-icons"
            />
          </div>
        </div>
        <div className="cart-item-details-container">
          <div className="name-rating-price">
            <p className="cart-product-title">Name : {title}</p>
            <p className="cart-product-price">Rating : {rating.rate}</p>
            <p className="cart-product-price">Price : ${itemCount * price}</p>
          </div>
          <hr className="cart-devider" />
          <p className="cart-product-description">{description}</p>
        </div>
      </div>
      <MdDeleteOutline
        onClick={onClickDeleteCartItem}
        className="delete-icon"
      />
    </div>
  );
};

export default CartItem;
