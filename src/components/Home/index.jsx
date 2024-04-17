import { useEffect, useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../Navbar";
import ProductItem from "../ProductItem";
import LoaderItem from "../Loader";

import { userContext } from "../../App";

import "./index.css";

const settings = {
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  const { value1 } = useContext(userContext);
  const [route, setRoute] = value1;

  const [data, setData] = useState({});
  const [apiState, setApiState] = useState("initial");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const fetchedData = await response.json();

    if (response.ok === true) {
      setApiState("success");
      setData(fetchedData);
    } else {
      setApiState("failure");
    }
  };

  const renderingData = () => {
    return (
      <div className="featured-product-card">
        {data.map((eachItem) => {
          if (
            String(eachItem.category) === "men's clothing" ||
            String(eachItem.category) === "women's clothing"
          ) {
            return <ProductItem eachItem={eachItem} key={eachItem.id} />;
          }
          return "";
        })}
      </div>
    );
  };

  const onClickRoute = () => {
    setRoute({ activeRoute: "store" });
  };

  const onClickRetry = () => {
    setApiState("initial");
    fetchData();
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
        return renderingData();
      case "failure":
        return renderedFailureItem();
      default:
        return <LoaderItem />;
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="offer-alert-container">
        <p className="offer-text">
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
          <Link to="/store">
            <span className="span" onClick={onClickRoute}>
              Shop Now
            </span>
          </Link>
        </p>
      </div>
      <div className="react-slide-container">
        <Slider {...settings}>
          <div className="slide-image-container slide-1">
            <div className="slide-image-inner-container">
              <div className="poster-description-container">
                <h1 className="fashion-sale-text">Fashion Sale</h1>
                <h1 className="poster-heading">Minimal Womenz Sale</h1>
                <p className="poster-para">
                  You can have anything you want in life if you dress for it
                </p>
                <Link to="/store">
                  <button className="poster-button" onClick={onClickRoute}>
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="slide-image-container slide-2">
            <div className="slide-image-inner-container">
              <div className="poster-description-container">
                <h1 className="fashion-sale-text">Fashion Sale</h1>
                <h1 className="poster-heading">Minimal Menz Sale</h1>
                <p className="poster-para">
                  You can have anything you want in life if you dress for it
                </p>
                <Link to="/store">
                  <button className="poster-button" onClick={onClickRoute}>
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="slide-image-container slide-3">
            <div className="slide-image-inner-container">
              <div className="poster-description-container">
                <h1 className="fashion-sale-text">Fashion Sale</h1>
                <h1 className="poster-heading">Minimal Menz Sale</h1>
                <p className="poster-para">
                  You can have anything you want in life if you dress for it
                </p>
                <Link to="/store">
                  <button className="poster-button" onClick={onClickRoute}>
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="featured-products-container">
        <h1 className="featured-products-text">Featured Products</h1>
        <hr className="devider" />
        {renderedItem()}
      </div>
    </div>
  );
};

export default Home;
