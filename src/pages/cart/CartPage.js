import React from "react";
import { useDataContext } from "../../context/ContextProvider";
import CartItem from "../../components/CartItem";

const CartPage = () => {
  const { cart } = useDataContext();
  return (
    <div>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.Pid}
            name={item.PName}
            price={item.Price}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};

export default CartPage;
