import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

type submitButtonProps = {
  children: React.ReactNode;
};

const SubmitButton: React.FC<submitButtonProps> = ({ children }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
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
