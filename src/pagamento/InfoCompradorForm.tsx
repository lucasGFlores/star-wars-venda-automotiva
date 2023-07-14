import { useFormik } from "formik";
import { formSchemaCliente as formSchema } from "../schemas/Forms.ts";
import { Customer } from "../model/Customer.ts";
import "../styles/Forms.css";
import { observe } from "mobx";
import { observer } from "mobx-react";
 const InfoCompradorForm = () => {

  const formatPhoneNumber = (value: string): string => {
    const cleanedValue = value.replace(/\D/g, "");
    const match = cleanedValue.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleanedValue;
  };
  const formatcpfcnpj = (value: string): string => {
    const cleanedValue = value.replace(/\D/g, "");
    const matchcpf = cleanedValue.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    const matchcnpj = cleanedValue.match(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/
    );
    if (matchcpf) {
      return `${matchcpf[1]}.${matchcpf[2]}.${matchcpf[3]}-${matchcpf[4]}`;
    } else if (matchcnpj) {
      return `${matchcnpj[1]}.${matchcnpj[2]}.${matchcnpj[3]}/${matchcnpj[4]}-${matchcnpj[5]}`;
    }
    return cleanedValue;
  };
  const customer = new Customer();

  const onSubmit = async (
    values: { name: string; email: string; telefone: string; cpfcnpj: string },
    actions: any
  ) => {
    console.log(values);
    console.log(customer);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: customer.name,
      email: customer.email,
      telefone: customer.telefone,
      cpfcnpj: customer.cpfcnpj,
    },
    onSubmit,
    validationSchema: formSchema,
  });
  console.log(formik.errors,JSON.stringify(customer));
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="name"
          id="name"
          className={formik.errors.name && formik.touched.name ? "error" : ""}
        />
        {formik.errors.name && formik.touched.name ? (
          <p className="error error-message">{formik.errors.name}</p>
        ) : (
          ""
        )}

        <label htmlFor="email">Email</label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          name="email"
          id="email"
          className={formik.errors.email && formik.touched.email ? "error" : ""}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="error error-message">{formik.errors.email}</p>
        ) : (
          ""
        )}
        <label htmlFor="telefone">Telefone</label>
        <input
          onChange={(event) => {
            const formattedValue = formatPhoneNumber(event.target.value);
            formik.setFieldValue("telefone", formattedValue);
          }}
          value={formik.values.telefone}
          onBlur={formik.handleBlur}
          type="text"
          name="telefone"
          id="telefone"
          className={
            formik.errors.telefone && formik.touched.telefone ? "error" : ""
          }
        />
        {formik.errors.telefone && formik.touched.telefone ? (
          <p className="error error-message">{formik.errors.telefone}</p>
        ) : (
          ""
        )}

        <label htmlFor="cpfcnpj">Cpf ou Cnpj</label>
        <input
          value={formik.values.cpfcnpj}
          onChange={(event) => {
            const formattedValue = formatcpfcnpj(event.target.value);
            formik.setFieldValue("cpfcnpj", formattedValue);
          }}
          onBlur={formik.handleBlur}
          type="text"
          name="cpfcnpj"
          id="cpfcnpj"
          className={
            formik.errors.cpfcnpj && formik.touched.cpfcnpj ? "error" : ""
          }
        />
        {formik.errors.cpfcnpj && formik.touched.cpfcnpj ? (
          <p className="error error-message">{formik.errors.cpfcnpj}</p>
        ) : (
          ""
        )}
        <button className="submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default InfoCompradorForm;