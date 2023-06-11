import { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import "./App.css";
import Cart2 from "./Images/cart.jpg";
const Cart = () => {
  const Navigate = useNavigate();
  const result = useSelector((state) => state);
  // console.log(result);
  return (
    <div>
      <img
        src={Cart2}
        alt="img"
        className="img-cart"
        onClick={() => Navigate("/cartdisplay")}
      />
      <h1>{result.length}</h1>
    </div>
  );
};
export default Cart;
