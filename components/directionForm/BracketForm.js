import React from "react";
import { Formik } from "formik";
import BracketFormBody from "./BraketFormBody";

export default function BracketForm() {
  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(JSON.stringify(values));
      }}
    >
      <BracketFormBody />
    </Formik>
  );
}
