import React from "react";

const CalculatePrice = ({ ingredients }) => {
  let sumPrice = 0;
  let priceNumber = 0;
  return (
    <>
      {ingredients.map((data) => {
        const { price } = data;
        priceNumber = parseInt(price);
        sumPrice = priceNumber + sumPrice;
        return true;
      })}
      $ {sumPrice}
    </>
  );
};

export default CalculatePrice;
