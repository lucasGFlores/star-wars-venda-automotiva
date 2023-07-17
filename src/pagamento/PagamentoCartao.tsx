import { ErrorMessage, Field, Form, Formik } from "formik";
import { pagamentoCartaoSchema } from "../schemas/Forms";
import DatePicker from "react-datepicker";
import CustomInput from "../components/CustomInput";
import boleto from "../image/boleto.png"
const PagamentoCartao = () => {
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
    <div className="container">
      <div style={{display:"flex", justifyContent:"center"}}>
        <button className={"select"} style={{padding:0,width:"100px",height:"80px"}}><img width={70} src={boleto}/></button>
        <button />
      </div>
      <Formik
        initialValues={{
          numero: "",
          name: "",
          validade: "",
          cvv: "",
        }}
        validationSchema={pagamentoCartaoSchema}
        onSubmit={(values, actions) => {}}
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
                <Field
                  style={{ marginRight: "30px" }}
                  name="numero"
                  label="Numero do cartão"
                  type="text"
                  component={CustomInput}
                />
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
                <Field
                  style={{ marginRight: "50px" }}
                  name="name"
                  label="Nome impresso no cartão"
                  type="text"
                  component={CustomInput}
                />

                <Field
                  style={{ width: "35px" }}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default PagamentoCartao;
