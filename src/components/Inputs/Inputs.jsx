import React from "react";
import { ContainerInput } from "./style";

const Inputs = ({ label, type, onChange, name, value, error }) => {
  return (
    <ContainerInput error={error}>
      <h1 className="title3">{label}</h1>
      <input
        className="input"
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      />
      {!!error && <label className="input_error"> {error}</label>}
    </ContainerInput>
  );
};
export default Inputs;
