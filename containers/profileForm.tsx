import Form, {ErrorMessage, Field, FormFooter} from "@atlaskit/form"
import TextField from "@atlaskit/textfield"
import {ProfileData} from "pages";
import styles from "./profileForm.module.scss"
import InputMask from "react-input-mask"
import Button from "@atlaskit/button";
import TextArea from "@atlaskit/textarea";
import {DatePicker} from "@atlaskit/datetime-picker";
import {validate as validateEmail} from 'email-validator';

const ProfileForm = () => {
  const formSubmit = (data) => console.log(data);

  return <div className={styles.container}>
    <Form<ProfileData> onSubmit={formSubmit}>
      {({formProps}) =>
        <form {...formProps}>
          <Field<string> label="First name" name="firstName" isRequired={true}>
            {({fieldProps}) =>
              <TextField
                {...fieldProps}
              />}
          </Field>

          <Field label="Last name" name="lastName" isRequired={true}>
            {({fieldProps}) =>
              <TextField
                {...fieldProps}
              />}
          </Field>

          <Field
            label="Email address"
            name="email"
            type={"email"}
            isRequired={true}
            validate={value => !validateEmail(value) && "INVALID_EMAIL"}
          >
            {({fieldProps, error}) => <>
              <TextField
                placeholder="e.g. john.kowalsky@gmail.com"
                {...fieldProps}
              />
              {error === "INVALID_EMAIL" && <ErrorMessage> Invalid email address</ErrorMessage>}
            </>}
          </Field>


          <Field label="Phone number" name="phone" isRequired={true}>
            {({fieldProps}) => <InputMask mask="+99 999 999 999" {...fieldProps}>
              {(inputProps) =>
                <TextField
                  placeholder="e.g. +48 656 767 878"
                  {...fieldProps}
                  {...inputProps}
                />}
            </InputMask>}
          </Field>

          <Field
            label="Birthday"
            name="birthday"
            isRequired={true}
            validate={ value=> Date.parse(value) > new Date() && "DATE_IN_FUTURE"}
          >
            {({fieldProps, error}) => <>
              <DatePicker
                placeholder="e.g. 25/02/1990 (dd/mm/yyyy)"
                {...fieldProps}
              />
              {error === "DATE_IN_FUTURE" && <ErrorMessage>Birthdate cannot be in the future</ErrorMessage>}
            </>}
          </Field>

          <Field label="Your avatar" name="avatarUrl" isRequired={true}>
            {({fieldProps}) => <>
              <Button onClick={() => {
                fieldProps.onChange("test")
              }}>Choose avatar</Button>
            </>}
          </Field>

          <Field label="About you" name="about">
            {({fieldProps}) =>
              <TextArea
                placeholder={"Interests, goals, what should others know about you..."}
                minimumRows={4}
                resize={"vertical"}
                {...fieldProps}
              />}
          </Field>

          <FormFooter>
            <Button type="submit" appearance="primary">
              Submit
            </Button>
          </FormFooter>
        </form>
      }
    </Form>
  </div>
}

export default ProfileForm