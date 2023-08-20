import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Field from "./components/FormsUI/TextField/Field";
import SelectField from "./components/FormsUI/Select/SelectField";
import countries from "./data/countries.json";
import DatePicker from "./components/FormsUI/DataTimePicker/DatePicker";
import Check from "./components/FormsUI/CheckBox/Check";
import SubmitButton from "./components/FormsUI/Button/SubmitButton";
const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivalDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className="form-wrapper">
            <Formik
              initialValues={INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Field name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Field name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={12}>
                    <Field name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <Field name="phone" label="Phone" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Field name="addressLine1" label="Address Line 1" />
                  </Grid>

                  <Grid item xs={12}>
                    <Field name="addressLine2" label="Address Line 2" />
                  </Grid>

                  <Grid item xs={6}>
                    <Field name="city" label="City" />
                  </Grid>

                  <Grid item xs={6}>
                    <Field name="state" label="State" />
                  </Grid>

                  <Grid item xs={12}>
                    <SelectField
                      name="country"
                      label="Country"
                      options={countries}
                    ></SelectField>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Booking Information</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DatePicker name="arrivalDate" />
                  </Grid>

                  <Grid item xs={6}>
                    <DatePicker name="departureDate" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    ></Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Check
                      name="termsOfService"
                      label="I accept the terms of service"
                      legend="Terms of Service"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton>Submit</SubmitButton>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
