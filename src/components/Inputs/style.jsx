import styled from "styled-components";

export const ContainerInput = styled.div`
  .input {
    height: 40px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid ${({ error }) => (error ? "red" : "#aebbce")};
    font-family: inherit;
  }

  .title3 {
    font-weight: 800;
    font-size: 12px;
    color: #595a5c;
  }

  .input_error {
    font-weight: 600;
    font-size: 12px;
    color: red;
  }
`;
