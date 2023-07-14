import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/Forms.css";
export default function Forms() {
  return (
    <>
      <div className="container">
        <form>
          <label htmlFor="Email">email</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </form>
      </div>
    </>
  );
}
