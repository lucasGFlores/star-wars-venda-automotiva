import * as yup from 'yup';

export const formSchemaCliente = yup.object().shape({
  name: yup.string().required("insira o nome"),
  email: yup
    .string()
    .email("insira um email valido")
    .required("insira um email"),

  telefone: yup
    .string()
    .required("insira um telefone")

    .min(11, "coloque um telefone válido, tem menos de 11 dígitos")
    .max(16, "coloque um telefone válido, tem digitos a mais"),
  cpfcnpj: yup
    .string()
    .required("insira cnpj ou cpf")
    .min(11, "coloque um cpf ou cnpj valido,tem menos de 11 digitos"),
});

export const formSchemaEndereco = yup.object().shape({
  cep: yup.string().min(9, "cep invalido").max(9, "cep invalido"),
  rua: yup.string().required("insira a rua"),
  cidade: yup.string().required("insira a cidade"),
  estado: yup
    .string()
    .oneOf(
      [
        "AC",
        "AL",
        "AM",
        "AP",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MG",
        "MS",
        "MT",
        "PA",
        "PB",
        "PE",
        "PI",
        "PR",
        "RJ",
        "RN",
        "RO",
        "RR",
        "RS",
        "SC",
        "SE",
        "SP",
        "TO",
      ],
      "uf invalido"
    )
    .required("ponha o uf"),
  numero: yup.string().required("insira o numero"),
  bairro: yup.string().required("insira o bairro"),
  complemento: yup.string(),
});