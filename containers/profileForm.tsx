import Form, {ErrorMessage, Field} from "@atlaskit/form"
import TextField from "@atlaskit/textfield"
import {ProfileData} from "pages";
import styles from "./profileForm.module.scss"
import InputMask from "react-input-mask"
import Button from "@atlaskit/button";
import TextArea from "@atlaskit/textarea";
import {DatePicker} from "@atlaskit/datetime-picker";
import {validate as validateEmail} from 'email-validator';
import {useModal} from "components/modal";
import ImagePicker from "components/image-picker";
import {useMemo} from "react";
import range from "utils/range";
import randomInt from "utils/randomInt";
import {useStorageState} from "react-storage-hooks";
import isBrowser from "utils/isBrowser";
import serverSideStorage from "utils/serverSideStorage";
import {sessionStorageKeys} from "consts"
import {useRouter} from "next/router";

const ProfileForm = () => {
  const [_, setFormData] = useStorageState<ProfileData>(
    isBrowser() ? sessionStorage : serverSideStorage,
    sessionStorageKeys.profileData
  );

  const {showModal} = useModal();
  const router = useRouter()

  const avatars = range(1, 50).map(i => ({url: `images/avatars/${i}.png`}));
  const defaultAvatar = useMemo(() => avatars[randomInt(0, avatars.length - 1)].url, []);

  return <div className={styles.container}>
    <Form<ProfileData>
      onSubmit={(data: ProfileData) => {
        setFormData(data);
        router.push("profile")
      }}
    >
      {({formProps, getValues}) => {
        return <form {...formProps}>

          <Field
            name="avatarUrl"
            isRequired={true}
            defaultValue={defaultAvatar}
          >
            {({fieldProps}) => <div className={styles.avatarPicker}>
              <Button
                appearance="subtle"
                onClick={() => showModal((closeModal) =>
                  <ImagePicker
                    images={avatars}
                    onSelect={avatar => {
                      fieldProps.onChange(avatar.url);
                      closeModal();
                    }}
                  />
                )}>Change</Button>
              <img src={getValues().avatarUrl} alt={"Avatar"} width={1} height={1}/>
            </div>}
          </Field>

          <Field
            label="First name"
            name="firstName"
            isRequired={true}
          >
            {({fieldProps}) =>
              <TextField {...fieldProps}/>}
          </Field>

          <Field
            label="Last name"
            name="lastName"
            isRequired={true}
          >
            {({fieldProps}) =>
              <TextField {...fieldProps}/>}
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

          <Field
            label="Phone number"
            name="phone"
            isRequired={true}
          >
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
            validate={value => Date.parse(value) > new Date() && "DATE_IN_FUTURE"}
          >
            {({fieldProps, error}) => <>
              <DatePicker
                placeholder="e.g. 25/02/1990 (dd/mm/yyyy)"
                {...fieldProps}
              />
              {error === "DATE_IN_FUTURE" && <ErrorMessage>Birthdate cannot be in the future</ErrorMessage>}
            </>}
          </Field>

          <Field
            label="About you"
            name="about"
          >
            {({fieldProps}) =>
              <TextArea
                placeholder={"Interests, goals, what should others know about you..."}
                minimumRows={4}
                resize={"vertical"}
                {...fieldProps}
              />}
          </Field>

          <Button type="submit" appearance="primary">
            Submit
          </Button>
        </form>;
      }}
    </Form>
  </div>
}

export default ProfileForm