import styled from "styled-components";

export const ContainerForm = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  .form_body {
    div {
      width: 100%;
    }
  }

  .title2 {
    font-weight: 800;
    font-size: 16px;
    color: #272727;
  }

  .form_footer {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .previous {
    border: none;
    background-color: transparent;
    color: #9e2525;
    text-align: left;
  }

  .continue {
    border: none;
    background-color: #9e2525;
    color: white;
    height: 40px;
    width: 100%;
    margin: 30px auto;
    border-radius: 5px;
  }
`;
