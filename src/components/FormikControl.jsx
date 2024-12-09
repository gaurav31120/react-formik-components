// import React from 'react'
// The funcgtionaslity of this component is ---->it will decide which of the forms
// fields have to be rendered based on particular prop. That called  prop as control.
function FormikControl(props) {
  const { control } = props;
  switch (control) {
    case "input":
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
