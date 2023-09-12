import styled from "styled-components";
export const StepFooter = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  .previous {
    border: none;
    background-color: transparent;
    color: #9e2525;
    text-align: left;
    cursor: pointer;
  }

  .continue {
    border: none;
    background-color: #9e2525;
    color: white;
    height: 40px;
    width: 100%;
    margin: 30px auto;
    border-radius: 5px;
    cursor: pointer;
  }

  .previous:hover {
    color: #c04646;
  }

  .continue:hover {
    background-color: #c04646;
  }
`;
