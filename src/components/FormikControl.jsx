// import React from 'react'
// The funcgtionaslity of this component is ---->it will decide which of the forms

import Input from "./input";

// fields have to be rendered based on particular prop. That called  prop as control.
function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarera":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
