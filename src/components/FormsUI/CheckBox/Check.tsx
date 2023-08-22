import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

type checkProps = {
  name: string;
  label: string;
  legend: string;
};

const Check: React.FC<checkProps> = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };
  const configCheckBox = {
    ...field,
    ...otherProps,
    variant: "outlined" as const,
    fullWidth: true,
    onChange: handleChange,
  };

  const configFormControl: {
    error?: boolean;
    helperText?: string;
  } = {};

  // const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.helperText = meta.error;
  }
  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckBox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default Check;
