import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const SubmitButton = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const configButton = {
    onClick: handleSubmit,
    variant: "contained" as const,
    color: "primary" as const,
    fullWidth: true,
  };
  return <Button {...configButton}>{children}</Button>;
};

export default SubmitButton;
