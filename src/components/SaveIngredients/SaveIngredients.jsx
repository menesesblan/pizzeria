import React from "react";
import { Button } from "./style";

const SaveIngredients = ({ ingredients, callbackButton, disabled }) => {
  const savePizza = () => {
    if (ingredients.length !== 0) {
      const pizzaWithIngredients = JSON.stringify(ingredients);
      localStorage.setItem("Pizza", pizzaWithIngredients);
      callbackButton(true);
    } else {
      alert("Debe seleccionar un ingrediente");
      callbackButton(false);
    }
  };
  return (
    <>
      <Button onClick={() => savePizza()}>Guardar</Button>
    </>
  );
};

export default SaveIngredients;
