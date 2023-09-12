import styled from "styled-components";
import { size } from "../../share/styles";

export const ContainerForm = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  .title2 {
    font-weight: 800;
    font-size: 16px;
    color: #272727;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-bottom: 2px;
  }
  .price {
    text-align: end;
    font-weight: 600;
    font-size: 14px;
    color: #272727;
  }
  .Name {
    font-size: 14px;
  }
  .priceTotal {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 14px;
    font-weight: 600;
  }
  .NumberTotal {
    text-align: end;
  }
  .line {
    width: 100%;
    border: solid 1px #d3d6e4;
    margin: 15px 0;
  }
  .footer {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .cancel {
    border: none;
    background-color: transparent;
    color: #9e2525;
    text-align: left;
  }
  .checkboxIngredients {
    height: 20px;
    width: 50px;
    -webkit-appearance: none;
    background-color: #c6c6c6;
    outline: none;
    border-radius: 20px;
    transition: 0.5s;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
  input:checked[type="checkbox"] {
    background-color: #9e2525;
  }

  .checkboxIngredients::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 15px;
    border-radius: 20px;
    top: 5px;
    left: 7px;
    background: #ffffff;
  }
  .containerCheck {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-1%, -50%);
  }
  input:checked[type="checkbox"]:before {
    left: 25px;
  }
  @media (min-width: ${size.mobileBigger}) {
    .containerCheck {
      transform: translate(20%, -50%);
    }
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.tabletBigger}) {
    .containerCheck {
      transform: translate(20%, -50%);
    }
  }
  @media (min-width: ${size.tabletBigger}) {
    .containerCheck {
      transform: translate(10%, -50%);
    }
  }
`;
