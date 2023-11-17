import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./add.css";

const Add = () => {
  const [increaseCount, setIncreaseCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  const passedData = location.state;

  const navigate = useNavigate();

  const addItemToCart = () => {
    const newCartItem = { ...passedData, quantity: increaseCount };
    setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    const storedData = JSON.parse(localStorage.getItem("stor")) || [];
    storedData.push(newCartItem);
    localStorage.setItem("stor", JSON.stringify(storedData));

    navigate("/Card");
  };

  const increase = () => {
    setIncreaseCount(increaseCount + 1);
  };

  const decrease = () => {
    if (increaseCount > 1) {
      setIncreaseCount(increaseCount - 1);
    }
  };

  return (
    <div className="d-flex height-one align-items-center">
      <div className="col-6 justify-content-center d-flex">
        <img alt="#" src={passedData.img} height={500} width={500} />
      </div>
      <div className="col-6 justify-content-center d-flex">
        <div>
          <h1>TITLE: {passedData.title}</h1>
          <h4>{passedData.description}</h4>
          <h1>Price: {passedData.price}</h1>
          <div className="d-flex">
            <button onClick={increase}>+</button>
            <input value={increaseCount} readOnly />
            <button onClick={decrease}>-</button>
          </div>
          <div>
            <button className="bg-primary px-3 py-2" onClick={addItemToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
