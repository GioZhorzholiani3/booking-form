import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

type OptionsType = Record<string, string>;

type SelectFieldProps = {
  name: string;
  options: OptionsType;
  label: string;
};

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  options,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();

  const [field, meta] = useField(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const dynamicProps = {
    ...(meta && meta.touched && meta.error
      ? { error: true, helperText: meta.error }
      : {}),
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined" as const,
    fullWidth: true,
    onChange: handleChange,
    ...dynamicProps,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectField;
