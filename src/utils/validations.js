import * as yup from "yup";

// export const phoneNumber =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//const phoneNumber = /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/;
const phoneNumber = /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/;

const cpfNumber =
  /^([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$/;

export const validationUser = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .matches(phoneNumber, "Digite um telefone válido"),
  cpf: yup
    .string()
    .required("O CPF é obrigatório")
    .matches(cpfNumber, "Digite um CPF válido"),
});
