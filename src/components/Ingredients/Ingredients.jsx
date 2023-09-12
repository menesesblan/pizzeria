import React, { useState } from "react";
import CalculatePrice from "../CalculatePrice/CalculatePrice";
import SaveIngredients from "../SaveIngredients/SaveIngredients";
import { INGREDIENTS } from "./constants";
import { ContainerForm } from "./style";
import StepButton from "../StepButton/StepButton";

const Ingredients = ({ ContinueStep, PreviousStep, formStep }) => {
  const [ingredients] = useState(INGREDIENTS);
  const [option, setOption] = useState([]);
  const [saveIngredientsData, setSaveIngredientsData] = useState(false);
  let checkOne = false;
  const checkedOption = (data) => {
    const { id } = data;
    const exist = option.find(({ id: idElement }) => idElement === id);

    if (option.length === 0) {
      checkOne = false;
    } else {
      checkOne = true;
    }

    if (!!exist === false) {
      setOption([...option, data]);
    } else {
      const newOptions = option.filter(({ id: idElement }) => idElement !== id);
      setOption(newOptions);
    }
  };

  const callbackButton = () => {
    if (option.length !== 0) {
      const pizzaWithIngredients = JSON.stringify(option);
      localStorage.setItem("Pizza", pizzaWithIngredients);
      ContinueStep();
    } else {
      alert("Debe seleccionar un ingrediente");
    }
  };
  return (
    <>
      <ContainerForm>
        <section className="header">
          <h1 className="title2">Ingredientes</h1>
        </section>
        <section className="listIngredients">
          {ingredients.map((data) => {
            const { id, name, price } = data;
            return (
              <div key={id} className="items">
                <label className="Name" htmlFor={id}>
                  {name}
                </label>
                <label className="price">$ {price}</label>
                <div className="containerCheck">
                  <input
                    type="checkbox"
                    id={id}
                    className="checkboxIngredients"
                    value={id}
                    onClick={() => checkedOption(data)}
                  />
                </div>
              </div>
            );
          })}
        </section>

        <div className="line"></div>
        <section className="priceTotal">
          <label>Valor Total:</label>
          <label className="NumberTotal">
            <CalculatePrice ingredients={option} />
          </label>
        </section>
        <div className="line"></div>

        <StepButton
          ContinueStep={callbackButton}
          PreviousStep={PreviousStep}
          formStep={formStep}
          className={"footer"}
        />
      </ContainerForm>
    </>
  );
};

export default Ingredients;
