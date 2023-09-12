import styled from "styled-components";
export const StepContainer = styled.div`
  .c-stepper {
    display: flex;
    margin-left: -30px;
  }

  .c-stepper__item {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
  }

  .c-stepper__item::before {
    --size: 3rem;
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: grey;
    opacity: 0.5;
    margin: 0 auto 1rem;
  }
  .c-stepper__item_current::before {
    background-color: red;
  }

  .c-stepper__item:not(:last-child) {
    &:after {
      content: "";
      position: relative;
      top: calc(10px / 2);
      width: calc(100% - 10px - 5px * 2);
      left: calc(50% + 10px / 2 + 5px);
      height: 2px;
      background-color: #e0e0e0;
      order: -1;
    }
  }

  .c-stepper__desc {
    color: grey;
    font-size: 10px;
  }

  .wrapper {
    max-width: 1000px;
    margin: 2rem auto 0;
  }
`;
