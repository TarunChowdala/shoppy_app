import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import UserDetails from "./components/UserDetails";
import Cart from "./components/Cart";
import SelectedProductItem from "./components/SelectedProductItem";
import Undefined from "./components/Undefined";

export const userContext = createContext();

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [route, setRoute] = useState({ activeRoute: "home" });

  return (
    <userContext.Provider
      value={{ value1: [route, setRoute], value2: [cartItems, setCartItems] }}
    >
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/user" element={<UserDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products/:id" element={<SelectedProductItem />} />
        <Route exact path="/undefined" element={<Undefined />} />
      </Routes>
    </userContext.Provider>
  );
};

export default App;
