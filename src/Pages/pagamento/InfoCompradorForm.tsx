import { useFormik } from "formik";
import { formSchemaCliente as formSchema } from "../../schemas/Forms.ts";
import { Customer } from "../../model/Customer.ts";
import "../../styles/Forms.css";
import { formatPhoneNumber,formatcpfcnpj } from "../../Resources/Resources.ts";
interface InfoCompradorFormProps {
  pagina: number;
  setPagina: React.Dispatch<React.SetStateAction<number>>;
}
 const InfoCompradorForm = ({pagina,setPagina} : InfoCompradorFormProps) => {
  const customer = new Customer();

  const onSubmit = async (
    values: { name: string; email: string; telefone: string; cpfcnpj: string },
    actions: any
  ) => {
    console.log(values);
    console.log(customer);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPagina(pagina + 1);
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
        <p style={{ width: "321px" }} className="error error-message">
          {formik.errors.name}
        </p>
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
        <p style={{ width: "321px" }} className="error error-message">
          {formik.errors.email}
        </p>
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
        <p style={{ width: "321px" }} className="error error-message">
          {formik.errors.telefone}
        </p>
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
        <p style={{ width: "321px" }} className="error error-message">
          {formik.errors.cpfcnpj}
        </p>
      ) : (
        ""
      )}
      <button className="submit" type="submit">
        Enviar
      </button>
    </form>
  );
};
export default InfoCompradorForm;