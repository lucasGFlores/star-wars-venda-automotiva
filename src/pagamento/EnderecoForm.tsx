import { observer } from "mobx-react"
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { formSchemaEndereco } from "../schemas/Forms";
import { Endereco } from "../model/Endereco";
import CustomInput from "../components/CustomInput"; 
import { Form } from "react-router-dom";

const EnderecoForm = () => {
 
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
     onSubmit={(values, actions) => {
         setTimeout(() => {

           alert(JSON.stringify(values, null, 2));

           actions.setSubmitting(false);

         }, 1000);

       }}
  >
    {(props) => (
    <Form>
      <CustomInput label=""/>
    </Form>
    )}
  </Formik>
};