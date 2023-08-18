import { Field, Formik, Form } from "formik";

import { formSchemaEndereco } from "../../schemas/Forms";

import { Endereco } from "../../model/Endereco";
import CustomInput from "../../components/CustomInput";
import "../../styles/Forms.css";
interface EnderecoFormProps {
  pagina: number;
  setPagina: React.Dispatch<React.SetStateAction<number>>;
}
const EnderecoForm = ({
  pagina,
  setPagina,
}: EnderecoFormProps): JSX.Element => {

  const formatCEP = (cep: string) => {
    // Lógica de formatação do CEP
    // Por exemplo: 12345678 -> 12345-678
    const cleanedcep = cep.replace(/\D/g, "");
    const matchcep = cleanedcep.match(/^(\d{5})(\d{3})$/);
    if (matchcep) return `${matchcep[1]}-${matchcep[2]}`;

    if (cep.length === 8 && cep.includes("-")) {
      const newcep = cep.replace("-", "");
      return newcep;
    }
    if (cep.length > 9) {
      return cep.slice(0, -1);
    }
  };

  return (
    <Formik
      initialValues={{
        cep: "",
        cidade: "",
        estado: "",
        rua: "",
        bairro: "",
        numero: "",
        complemento: "",
      }}
      validationSchema={formSchemaEndereco}
      onSubmit={(values, actions) => {
        console.log(values);
        const endereco = new Endereco(
          values.cep,
          values.cidade,
          values.estado,
          values.rua,
          values.bairro,
          values.numero,
          values.complemento
        );
        setPagina(pagina! + 1);
      }}
    >
      {(props) => (
        <Form>
          <Field
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const cep = e.target.value;
              props.setFieldValue("cep", formatCEP(cep));
              if (cep.length === 8) {
                console.log("fetching cep");

                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                  .then((res) => res.json())
                  .then((data) => {
                    props.setFieldValue("cidade", data.localidade);
                    props.setFieldValue("estado", data.uf);
                    props.setFieldValue("rua", data.logradouro);
                    props.setFieldValue("bairro", data.bairro);
                  });
              }
            }}
            name="cep"
            type="text"
            component={CustomInput}
            label="cep"
          />
          <div style={{ display: "flex" }}>
            <div className="minContent" style={{ marginRight: "10px" }}>
              <Field
                style={{ width: "210px" }}
                name="cidade"
                type="text"
                component={CustomInput}
                label="cidade"
              />
            </div>
            <Field
              className="select"
              name="estado"
              type="text"
              component="select"
              label="uf"
            >
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AM">AM</option>
              <option value="AP">AP</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MG">MG</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="PR">PR</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="RS">RS</option>
              <option value="SC">SC</option>
              <option value="SE">SE</option>
              <option value="SP">SP</option>
              <option value="TO">TO</option>
            </Field>
          </div>
          <Field name="rua" type="text" component={CustomInput} label="rua" />
          <Field
            name="bairro"
            type="text"
            component={CustomInput}
            label="bairro"
          />
          <div style={{ display: "flex" }}>
            <div
              className="minContent"
              style={{ marginLeft: "10px", marginRight: "60px" }}
            >
              <Field
                style={{ width: "80px" }}
                name="numero"
                type="text"
                component={CustomInput}
                label="numero"
              />
            </div>
            <div className="minContent">
              <Field
                style={{ width: "130px" }}
                name="complemento"
                type="text"
                component={CustomInput}
                label="complemento"
              />
            </div>
          </div>
          <button
            disabled={props.isSubmitting}
            className="submit"
            type="submit"
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default EnderecoForm;
