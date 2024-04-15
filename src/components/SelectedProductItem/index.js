import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { userContext } from "../../App";

import Swal from "sweetalert2";

import Navbar from "../Navbar";
import LoaderItem from "../Loader";

import "./index.css";

const SelectedProductItem = (props) => {
  const { value2 } = useContext(userContext);
  const [cartItems, setCartItems] = value2;

  const [apiState, setApiState] = useState("initial");
  const [productData, setPrductData] = useState();

  const location = useLocation();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await fetch(
      `https://fakestoreapi.com${location.pathname}`
    );
    const fetchedData = await response.json();
    if (response.ok === true) {
      setApiState("success");
      setPrductData(fetchedData);
    } else {
      setApiState("failure");
    }
  };

  const onClickAddtoCart = () => {
    if (cartItems.length > 0) {
      let itemFound = false;
      cartItems.map((eachProduct) => {
        if (eachProduct.id === productData.id) {
          itemFound = true;
        }
        return;
      });
      if (itemFound === true) {
        Swal.fire({
          title: "Item Already Added!",
          text: "Continue Shopping!",
          icon: "success",
        });
        return setCartItems([...cartItems]);
      } else {
        Swal.fire({
          title: "Added to Cart!",
          text: "Continue Shopping!",
          icon: "success",
        });
        return setCartItems([...cartItems, { ...productData }]);
      }
    } else {
      Swal.fire({
        title: "Added to Cart!",
        text: "Continue Shopping!",
        icon: "success",
      });
      return setCartItems([{ ...productData }]);
    }
  };

  const renderProductItem = () => {
    const { image, title, price, rating, description } = productData;

    return (
      <div className="selected-product-card">
        <img src={image} alt={title} className="selected-product-image" />
        <div className="product-description-container">
          <p className="cart-product-title">Name : {title}</p>
          <p className="cart-product-price">Rating : {rating.rate}</p>
          <p className="cart-product-price">Price : ${price}</p>
          <hr className="devider-product" />
          <p>{description}</p>
          <button onClick={onClickAddtoCart} className="poster-button">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  const onClickRetry = () => {
    setApiState("initial");
    fetchDetails();
  };

  const renderedFailureItem = () => {
    return (
      <div className="error-container">
        <img
          src="https://res.cloudinary.com/dvtotdiqa/image/upload/v1712988043/c7m41bxwbv9e0d4bfljh.png"
          alt="error"
          className="error-img"
        />
        <p>Ohh! it's seems to be network issue.</p>
        <button onClick={onClickRetry} className="btn btn-danger">
          Retry
        </button>
      </div>
    );
  };

  const renderedItem = () => {
    switch (apiState) {
      case "success":
        return renderProductItem();
      case "failure":
        return renderedFailureItem();
      default:
        return <LoaderItem />;
    }
  };

  return (
    <div className="selected-product-container">
      <Navbar />
      {renderedItem()}
    </div>
  );
};

export default SelectedProductItem;
