import Form, {ErrorMessage, Field} from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import InputMask from 'react-input-mask';
import Button from '@atlaskit/button';
import TextArea from '@atlaskit/textarea';
import {DatePicker} from '@atlaskit/datetime-picker';
import {validate as validateEmail} from 'email-validator';
import {useModal} from 'components/modal';
import ImagePicker from 'components/image-picker';
import {useMemo} from 'react';
import range from 'utils/range';
import randomInt from 'utils/randomInt';
import {useStorageState} from 'react-storage-hooks';
import isBrowser from 'utils/isBrowser';
import serverSideStorage from 'utils/serverSideStorage';
import {sessionStorageKeys} from 'consts';
import {useRouter} from 'next/router';
import {ProfileData} from 'models';
import styles from './profile-form.module.scss';

const ValidationError = {
  INVALID_EMAIL: "INVALID_EMAIL",
  DATE_IN_FUTURE: "DATE_IN_FUTURE"
}

const ProfileForm = () => {
  const [_, setFormData] = useStorageState<ProfileData>(
    isBrowser() ? sessionStorage : serverSideStorage,
    sessionStorageKeys.profileData,
  );

  const {showModal} = useModal();
  const router = useRouter();

  const avatars = range(1, 50).map((i) => ({url: `images/avatars/${i}.png`}));
  const defaultAvatar = useMemo(() => avatars[randomInt(0, avatars.length - 1)].url, []);

  return (
    <div className={styles.container}>
      <Form<ProfileData>
        onSubmit={(data: ProfileData) => {
          setFormData(data);
          router.push('profile');
        }}
      >
        {({formProps, getValues}) => (
          <form {...formProps}>
            <Field
              name="avatarUrl"
              isRequired
              defaultValue={defaultAvatar}
            >
              {({fieldProps}) => {
                const showImagePicker = () => showModal((closeModal) => (
                  <ImagePicker
                    images={avatars}
                    onSelect={(avatar) => {
                      fieldProps.onChange(avatar.url);
                      closeModal();
                    }}
                  />
                ));
                return (
                  <div className={styles.avatarPicker}>
                    <Button
                      appearance="subtle"
                      onClick={showImagePicker}
                    >
                      Change
                    </Button>
                    <img
                      src={getValues().avatarUrl}
                      alt="Avatar"
                      onClick={showImagePicker}
                      width={1}
                      height={1}
                    />
                  </div>
                );
              }}
            </Field>

            <Field
              label="First name"
              name="firstName"
              isRequired
            >
              {({fieldProps}) => <TextField {...fieldProps} />}
            </Field>

            <Field
              label="Last name"
              name="lastName"
              isRequired
            >
              {({fieldProps}) => <TextField {...fieldProps} />}
            </Field>

            <Field
              label="Email address"
              name="email"
              isRequired
              validate={(value) => {
                if (value !== undefined) {
                  if (!validateEmail(value)) {
                    return ValidationError.INVALID_EMAIL
                  }
                }
              }}
            >
              {({fieldProps, error}) => (
                <>
                  <TextField
                    placeholder="e.g. john.kowalsky@gmail.com"
                    type={"email"}
                    {...fieldProps}
                  />
                  {error === ValidationError.INVALID_EMAIL && <ErrorMessage> Invalid email address</ErrorMessage>}
                </>
              )}
            </Field>

            <Field
              label="Phone number"
              name="phone"
              isRequired
            >
              {({fieldProps}) => (
                <InputMask mask="+99 999 999 999" {...fieldProps}>{()=>
                    <TextField
                      placeholder="e.g. +48 656 767 878"
                      type={"phone"}
                      {...fieldProps}
                    />}
                </InputMask>
              )}
            </Field>

            <Field
              label="Birthday"
              name="birthday"
              isRequired={true}
              validate={(value) => {
                if(value !== undefined) {
                  if(new Date(value) > new Date()) {
                    return ValidationError.DATE_IN_FUTURE
                  }
                }
              }}
            >
              {({fieldProps, error}) => (
                <>
                  <DatePicker
                    placeholder="e.g. 25/02/1990 (dd/mm/yyyy)"
                    {...fieldProps}
                  />
                  {error === ValidationError.DATE_IN_FUTURE && <ErrorMessage>Birthdate cannot be in the future</ErrorMessage>}
                </>
              )}
            </Field>

            <Field<string, HTMLTextAreaElement>
              label="About you"
              name="about"
            >
              {({fieldProps}) => (
                <TextArea
                  placeholder="Interests, goals, what should others know about you..."
                  minimumRows={4}
                  resize="vertical"
                  {...fieldProps}
                />
              )}
            </Field>

            <Button type="submit" appearance="primary">
              Submit
            </Button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default ProfileForm;
