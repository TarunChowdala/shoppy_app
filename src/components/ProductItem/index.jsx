import { useContext } from "react";

import { Link } from "react-router-dom";

import { userContext } from "../../App";

import { BsCart } from "react-icons/bs";
import { GrZoomIn } from "react-icons/gr";
import Swal from "sweetalert2";
import "./index.css";

const ProductItem = (props) => {
  const { value2, value1 } = useContext(userContext);
  const [cartItems, setCartItems] = value2;
  const [route, setRoute] = value1;

  const { eachItem } = props;
  const { image, id, price, title } = eachItem;

  const addedToCart = () => {
    if (cartItems.length > 0) {
      let itemFound = false;
      cartItems.map((eachProduct) => {
        if (eachProduct.id === id) {
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
        return setCartItems([...cartItems, { ...eachItem }]);
      }
    } else {
      Swal.fire({
        title: "Added to Cart!",
        text: "Continue Shopping!",
        icon: "success",
      });
      return setCartItems([{ ...eachItem }]);
    }
  };

  const onClickProductItem = () => {
    setRoute("");
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-item-img" />
      <p className="product-title">{title}</p>
      <p className="product-price">Price: ${price}</p>
      <div className="hover-container">
        <BsCart className="product-card-icons" onClick={addedToCart} />
        <Link to={`/products/${id}`}>
          <GrZoomIn
            onClick={onClickProductItem}
            className="product-card-icons"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
