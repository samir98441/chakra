import React from "react";
import { useDataContext } from "../../context/ContextProvider";
import CartItem from "../../components/CartItem";
import Header from "../../components/header/Header";

const Cart = () => {
  const { cart } = useDataContext();
  return (
    <div>
      {console.log("incart", cart)}
      {cart.map((item) => {
        return <CartItem key={item.Pid} name={item.PName} price={item.Price} />;
      })}
    </div>
  );
};

export default Cart;
