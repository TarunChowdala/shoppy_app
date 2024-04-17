import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

import { IoMenu } from "react-icons/io5";

import "./index.css";
import { userContext } from "../../App";

const Navbar = () => {
  const { value1, value2 } = useContext(userContext);
  const [route, setRoute] = value1;
  const [cartItems] = value2;

  const [menuStatus, setMenuStatus] = useState(false);

  const onClickMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const onClickRoute = (selectedRoute) => {
    setRoute({ activeRoute: selectedRoute });
  };

  const selectedClass = menuStatus ? "menu-selected" : "nav-bar-small";

  const noOfCartItems = cartItems.length === 0 ? 0 : cartItems.length;

  return (
    <>
      <div className="nav-bar">
        <img
          src="https://res.cloudinary.com/dvtotdiqa/image/upload/v1710140483/zaac9awiconnmsaq7jkv.png"
          alt="app logo"
          className="nav-logo"
        />
        <div className="nav-elements-container">
          <Link className="link" to="/">
            <p
              className={`${
                route.activeRoute === "home"
                  ? "selected-route nav-link"
                  : "nav-link"
              }`}
              onClick={() => onClickRoute("home")}
            >
              Home
            </p>
          </Link>
          <Link className="link" to="/store">
            <p
              className={`${
                route.activeRoute === "store"
                  ? "selected-route nav-link"
                  : "nav-link"
              }`}
              onClick={() => onClickRoute("store")}
            >
              Store
            </p>
          </Link>
          <Link className="link" to="/about">
            <p
              className={`${
                route.activeRoute === "about"
                  ? "selected-route nav-link"
                  : "nav-link"
              }`}
              onClick={() => onClickRoute("about")}
            >
              About Us
            </p>
          </Link>
        </div>
        <div className="nav-icons-container">
          <Link className="link" to="/user">
            <FaUserAlt
              className={`${
                route.activeRoute === "user"
                  ? "selected-icon nav-icon"
                  : "nav-icon"
              }`}
              onClick={() => onClickRoute("user")}
            />
          </Link>
          <div className="cart-icon">
            <Link to="/cart" className="link">
              <FaShoppingCart
                className={`${
                  route.activeRoute === "cart"
                    ? "selected-icon nav-icon"
                    : "nav-icon"
                }`}
                onClick={() => onClickRoute("cart")}
              />
            </Link>
            <div className="cart-count">{noOfCartItems}</div>
          </div>
          <Link className="link" to="/login">
            <RiLoginBoxFill className="nav-icon" />
          </Link>
        </div>
      </div>
      <div className={selectedClass}>
        <div className="nav-inner-small">
          <img
            src="https://res.cloudinary.com/dvtotdiqa/image/upload/v1710140483/zaac9awiconnmsaq7jkv.png"
            alt="app logo"
            className="nav-logo"
          />
          <div className="icon-container-small">
            <Link className="link" to="/user">
              <FaUserAlt
                onClick={() => onClickRoute("user")}
                className={`${
                  route.activeRoute === "user"
                    ? "selected-icon nav-icon user-icon "
                    : "nav-icon user-icon "
                }`}
              />
            </Link>
            <Link to="/cart" className="link">
              <div className="cart-icon">
                <FaShoppingCart
                  onClick={() => onClickRoute("cart")}
                  className={`${
                    route.activeRoute === "cart"
                      ? "selected-icon nav-icon"
                      : "nav-icon"
                  }`}
                />
                <div className="cart-count">{noOfCartItems}</div>
              </div>
            </Link>
            <IoMenu className="menu-icon" onClick={onClickMenu} />
          </div>
        </div>
        <hr className="devider-small" />
        <div className="nav-elements-small">
          <Link className="link" to="/">
            <p
              className={`${
                route.activeRoute === "home"
                  ? "selected-route-small nav-icons-small"
                  : "nav-icons-small"
              }`}
              onClick={() => onClickRoute("home")}
            >
              Home
            </p>
          </Link>
          <Link className="link" to="/store">
            <p
              className={`${
                route.activeRoute === "store"
                  ? "selected-route-small nav-icons-small"
                  : "nav-icons-small"
              }`}
              onClick={() => onClickRoute("store")}
            >
              Store
            </p>
          </Link>
          <Link className="link" to="/about">
            <p
              className={`${
                route.activeRoute === "about"
                  ? "selected-route-small nav-icons-small"
                  : "nav-icons-small"
              }`}
              onClick={() => onClickRoute("about")}
            >
              About Us
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
