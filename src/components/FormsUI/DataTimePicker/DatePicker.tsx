import { TextField } from "@mui/material";

import { useField } from "formik";

type DatePickerProps = {
  name: string;
};

const DatePicker: React.FC<DatePickerProps> = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const dynamicProps = {
    ...(meta && meta.touched && meta.error
      ? { error: true, helperText: meta.error }
      : {}),
  };

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: "date",
    fullWidth: true,
    variant: "outlined" as const,
    inputLabelProps: {
      shrink: true,
    },
    ...dynamicProps,
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }
  return <TextField {...configDateTimePicker} />;
};

export default DatePicker;
