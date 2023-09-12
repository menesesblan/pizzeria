import React, { useState } from "react";
import Ingredients from "../../components/Ingredients/Ingredients";
import DataUserPizza from "./components/dataUserPizza/DataUserPizza";
import { Container } from "./style";
import StepButton from "../../components/StepButton/StepButton";
import Step from "../../components/Step/Step";
import OrderPizza from "./components/orderPizza/OrderPizza";

const CreatePizza = () => {
  const [formStep, setFormStep] = useState(0);
  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const previousStep = () => {
    setFormStep(formStep - 1);
  };

  return (
    <Container>
      <div className="container_body">
        <h1 className="create_tittle">Crea tu pizza a tu gusto</h1>
        <Step formStep={formStep} />
        {formStep === 0 && (
          <Ingredients
            ContinueStep={nextStep}
            PreviousStep={previousStep}
            formStep={formStep}
          />
        )}
        {formStep === 1 && (
          <DataUserPizza
            ContinueStep={nextStep}
            PreviousStep={previousStep}
            formStep={formStep}
          />
        )}
        {/* {
          formStep ===2 && (
            <OrderPizza
            ContinueStep={nextStep}
            PreviousStep={previousStep}
            formStep={formStep}
            />
          )
        } */}
      </div>
    </Container>
  );
};

export default CreatePizza;
