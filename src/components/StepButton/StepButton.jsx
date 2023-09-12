import React from "react";
import { StepFooter } from "./style";
import { CONFIG_STEP } from "../../pages/createPizza/Constans";

const StepButton = ({ ContinueStep, PreviousStep, formStep }) => {
  const continueStep = () => {
    ContinueStep();
  };

  const previousStep = () => {
    PreviousStep();
  };
  const disablePreviousBtn = CONFIG_STEP.init === formStep;
  const disableNextBtn = formStep + 1 >= CONFIG_STEP.limit;

  return (
    <>
      <StepFooter>
        <button
          className="previous"
          onClick={() => previousStep()}
          disabled={disablePreviousBtn}
        >
          Anterior
        </button>
        <button
          className="continue"
          onClick={() => continueStep()}
          disabled={disableNextBtn}
        >
          Continuar
        </button>
      </StepFooter>
    </>
  );
};

export default StepButton;
