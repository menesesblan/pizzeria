import styled from "styled-components";
import { size } from "../../share/styles";

export const Container = styled.div`
  padding: 2rem;
  margin: 0;
  .container_body {
    width: 100%;
    background-color: transparent;
  }
  .create_tittle {
    text-align: center;
    font-size: 18px;
  }
  @media (min-width: ${size.tablet}) and (max-width: ${size.tabletBigger}) {
    .container_body {
      padding: 2rem;
      width: 70%;
      background-color: #ffffff;
      border-radius: 5px;
      margin: 0 auto;
      box-shadow: 2px 4px 6px grey;
    }
  }

  @media (min-width: ${size.tabletBigger}) {
    .container_body {
      max-width: 400px;
      padding: 2rem 6rem;
      width: 100%;
      background-color: #ffffff;
      border-radius: 5px;
      margin: 0 auto;
      box-shadow: 2px 4px 6px grey;
    }
  }
`;
