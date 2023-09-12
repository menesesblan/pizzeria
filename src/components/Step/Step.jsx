import React from "react";
import { StepContainer } from "./Style";
import { isCurrent } from "./Constans";
import { CONFIG_STEP } from "../../pages/createPizza/Constans";

const Step = ({ formStep }) => {
  return (
    <>
      <StepContainer>
        <div className="wrapper option-1 option-1-1">
          <ol className="c-stepper">
            {CONFIG_STEP.steppers.map((item, index) => (
              <li
                className={`c-stepper__item ${
                  isCurrent(index, formStep) && "c-stepper__item_current"
                }`}
                key={item}
              >
                <p className="c-stepper__desc">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </StepContainer>
    </>
  );
};

export default Step;
