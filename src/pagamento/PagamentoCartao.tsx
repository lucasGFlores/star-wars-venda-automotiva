import { Field, Form, Formik } from "formik";
import { pagamentoCartaoSchema } from "../schemas/Forms";
import CustomInput from "../components/CustomInput";
import "../styles/Forms.css"

interface PagamentoCartaoProps {
  pagina: number;
  setPagina: React.Dispatch<React.SetStateAction<number>>;
}
const PagamentoCartao = ({pagina,setPagina}: PagamentoCartaoProps) => {
  const formatDate = (date: string) => {
    console.log(date);

    let cleanedDate = date.replace(/\D/g, "");
    if (cleanedDate.length > 6) {
      cleanedDate = cleanedDate.slice(0, -1);
    }

    const match = cleanedDate.match(/^(\d{2})(\d{4})$/);
    if (match) {
      return `${
        Number.parseInt(match[1].toString()) === 0 ||
        Number.parseInt(match[1].toString()) > 12
          ? "01"
          : match[1]
      }/${match[2]}`;
    }
    if (cleanedDate.length < 5 && cleanedDate.includes("/")) {
      return cleanedDate.replace("/", "");
    }
  };

  const formatCVV = (cvv: string) => {
    const cleanedCVV = cvv.replace(/\D/g, "");
    if (cleanedCVV.length > 3) {
      return cleanedCVV.slice(0, -1);
    } else {
      return cleanedCVV;
    }
  };
  return (
    <Formik
      initialValues={{
        numero: "",
        name: "",
        validade: "",
        cvv: "",
      }}
      validationSchema={pagamentoCartaoSchema}
      onSubmit={(values, actions) => {
        actions.resetForm;
        setPagina(pagina + 1);
      }}
    >
      {(props) => (
        <Form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
            }}
          >
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <div style={{ marginRight: "30px" }}>
                <Field
                  name="numero"
                  label="Numero do cartão"
                  type="text"
                  component={CustomInput}
                />
              </div>
              <Field
                style={{ width: "65px" }}
                name="validade"
                label="validade"
                type="text"
                component={CustomInput}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const validade = event.target.value;
                  props.setFieldValue("validade", formatDate(validade));
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "50px" }}>
                <Field
                  name="name"
                  label="Nome impresso no cartão"
                  type="text"
                  component={CustomInput}
                />
              </div>
              <Field
                style={{ width: "45px" }}
                name="cvv"
                label="CVV"
                type="text"
                component={CustomInput}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const cvv = event.target.value;
                  props.setFieldValue("cvv", formatCVV(cvv));
                }}
              />
            </div>
          </div>
        <button style={{width:"160px", height:"40px", padding:"5px",marginTop:"15px", marginBottom:"15px"}} className="select">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};
export default PagamentoCartao;
