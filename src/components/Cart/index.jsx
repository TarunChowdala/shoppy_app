import { useContext } from "react";

import { userContext } from "../../App";

import Navbar from "../Navbar";
import CartItem from "../CartItem";

import "./index.css";

const Cart = () => {
  const { value2 } = useContext(userContext);
  const [cartItems, setCartItems] = value2;

  let totalCartPrice = 0;
  cartItems.map((eachItem) => {
    return (totalCartPrice += eachItem.price);
  });

  const renderCartItems = () => {
    return (
      <>
        <div className="cart-items-container">
          {cartItems.map((eachItem) => {
            return (
              <CartItem
                deleteCartItem={deleteCartItem}
                key={eachItem.id}
                eachItem={eachItem}
              />
            );
          })}
        </div>
        <div className="cart-footer-container">
          <button className="btn btn-dark" onClick={onClickClearAll}>
            Clear All
          </button>
        </div>
      </>
    );
  };

  const deleteCartItem = (clickedId) => {
    setCartItems(
      cartItems.filter((eachItem) => {
        return eachItem.id !== clickedId;
      })
    );
  };

  const onClickClearAll = () => {
    setCartItems([]);
  };

  return (
    <div className="cart-container">
      <Navbar />
      {cartItems.length === 0 ? (
        <div className="no-cart-items">
          <img
            src="https://res.cloudinary.com/dvtotdiqa/image/upload/v1712410128/qwr8kknxihtyujcmshhw.png"
            alt="no cart items"
            className="cart-items-img"
          />
          <p>No cart items</p>
        </div>
      ) : (
        renderCartItems()
      )}
    </div>
  );
};

export default Cart;
