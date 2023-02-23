import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const CartItem = ({ name, price, quantity }) => {
  return (
    <div>
      <Box>
        <Image
          boxSize="250px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Box>
      <div className="itemName">{name}</div>
      <div className="itemPrice">
        <Text fontSize="20px">Rs.{price}</Text>
      </div>
      <div>Quantity: {quantity}</div>
    </div>
  );
};

export default CartItem;
