// import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Required"),
  });
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log("Formik props", formik);
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <button type="submit">Submit</button>
              {/* <submit type="submit">Submit</submit> */}
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default FormikContainer;
