import { useState, useEffect } from "react";

import Navbar from "../Navbar";
import LoaderItem from "../Loader";
import ProductItem from "../ProductItem";
import "./index.css";

const Store = () => {
  const [data, setData] = useState({});
  const [category, setCategory] = useState("All");
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

  const renderProductsDetails = () => {
    return (
      <div className="store-items-container">
        {data.map((eachItem) => {
          if (category === eachItem.category) {
            return <ProductItem eachItem={eachItem} key={eachItem.id} />;
          } else if (category === "All") {
            return <ProductItem eachItem={eachItem} key={eachItem.id} />;
          }
          return "";
        })}
      </div>
    );
  };

  const onClickCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
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
        return renderProductsDetails();
      case "failure":
        return renderedFailureItem();
      default:
        return <LoaderItem />;
    }
  };

  return (
    <div className="store-container">
      <Navbar />
      <div className="store-inner-container">
        <h1 className="featured-products-text">Trending Products</h1>
        <ul className="filters-container">
          <li
            className={`${
              category === "All" ? "selected-category" : "filter-item"
            }`}
            onClick={() => onClickCategory("All")}
          >
            All
          </li>
          <li
            className={`${
              category === "men's clothing"
                ? "selected-category"
                : "filter-item"
            }`}
            onClick={() => onClickCategory("men's clothing")}
          >
            Men
          </li>
          <li
            className={`${
              category === "women's clothing"
                ? "selected-category"
                : "filter-item"
            }`}
            onClick={() => onClickCategory("women's clothing")}
          >
            Women
          </li>
          <li
            className={`${
              category === "jewelery" ? "selected-category" : "filter-item"
            }`}
            onClick={() => onClickCategory("jewelery")}
          >
            Jewellery
          </li>
          <li
            className={`${
              category === "electronics" ? "selected-category" : "filter-item"
            }`}
            onClick={() => onClickCategory("electronics")}
          >
            Electronics
          </li>
        </ul>
        <div className="filter-container-small">
          <select
            value={category}
            className="drop-down"
            onChange={onChangeCategory}
          >
            <option value="All">All</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewellery</option>
          </select>
        </div>
        <hr className="devider" />
        {renderedItem()}
      </div>
    </div>
  );
};

export default Store;
