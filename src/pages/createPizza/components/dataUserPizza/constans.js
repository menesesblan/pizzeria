import { object, string, number, date } from "yup";

export const INITIAL_VALUES = [{
  customer_name: "",
  phone: "",
  pizza_name: "",
  date: "",
  pizza_price: "",
}];

export const saveData = (data, callback) => {
  console.log(data)
  const userDataJson = JSON.stringify(data);
  localStorage.setItem("cliente", userDataJson);
  callback();
};

export const SCHEMA = object().shape({
  customer_name: string().required("Campo requerido"),
  phone: string().required("Campo requerido").max(10, "Menor a 10 caracteres"),
  pizza_name: string().required("Campo requerido"),
  pizza_price: number().required("Campo requerido").positive("Número positivo"),
  date: date().default(() => new Date()),
});
