import React from "react";
import { ContainerForm } from "./style";
import Inputs from "../../../../components/Inputs/Inputs";
import { Formik } from "formik";
import { INITIAL_VALUES, SCHEMA, saveData } from "./constans";
import StepButton from "../../../../components/StepButton/StepButton";

const DataUserPizza = ({ ContinueStep, PreviousStep, formStep }) => {
  return (
    <ContainerForm>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SCHEMA}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          saveData(values, () => {
            setSubmitting(false);
            resetForm();
            ContinueStep();
          })
        }
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          // console.log("values", values);
          // console.log("errors", errors);
          return (
            <>
              <section className="form_header">
                <h1 className="title2">Datos del Cliente</h1>
              </section>
              <section className="form_body">
                <Inputs
                  name="customer_name"
                  value={values.customer_name}
                  error={errors.customer_name}
                  type="text"
                  label="Nombre"
                  onChange={handleChange}
                />
                <Inputs
                  name="phone"
                  value={values.phone}
                  error={errors.phone}
                  type="number"
                  label="Telefono"
                  onChange={handleChange}
                />
                <Inputs
                  name="pizza_name"
                  value={values.pizza_name}
                  error={errors.pizza_name}
                  type="text"
                  label="Nombre de la pizza"
                  onChange={handleChange}
                />
                <Inputs
                  name="pizza_price"
                  value={values.pizza_price}
                  error={errors.pizza_price}
                  type="number"
                  label="Precio"
                  onChange={handleChange}
                />
                <Inputs
                  name="date"
                  value={values.date}
                  error={errors.date}
                  type="date"
                  label="Fecha del pedido"
                  onChange={handleChange}
                />
              </section>

              <StepButton
                ContinueStep={handleSubmit}
                PreviousStep={PreviousStep}
                formStep={formStep}
                className={"footer"}
              />
            </>
          );
        }}
      </Formik>
    </ContainerForm>
  );
};

export default DataUserPizza;
