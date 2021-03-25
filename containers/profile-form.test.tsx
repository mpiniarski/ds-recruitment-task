import {configure, fireEvent, render, screen} from '@testing-library/react';
import ProfileForm from "./profile-form";


configure({testIdAttribute: 'data-test'})

describe('modal tests', () => {
  it('should validate invalid email address', () => {
    render(
      <ProfileForm />
    );
    fireEvent.change(screen.getByTestId('Input-email'), { target: { value: 'testtest' } })
    console.log(screen.getByTestId('Input-email'))
    expect(screen.getByTestId('Input-email').getAttribute("aria-invalid")).toBeTruthy()
  });

  it('should not accept invalid characters in phone number', () => {
    render(
      <ProfileForm />
    );

    fireEvent.change(screen.getByTestId('Input-phone'), { target: { value: 'testtest' } })
    expect((screen.getByTestId('Input-phone') as HTMLInputElement).value).toBe("+__ ___ ___ ___")
  });

  it('should validate invalid phone number', () => {
    render(
      <ProfileForm />
    );

    fireEvent.change(screen.getByTestId('Input-phone'), { target: { value: '+48 3dd' } })
    expect(screen.getByTestId('Input-phone').getAttribute("aria-invalid")).toBeTruthy()
  });


  // DatePicker from AtlasKit is hard to test, I'll skip these tests due to lack of time

  // it('should not accept invalid characters in birthdate', () => {});
  // it('should validate future date in birthdate', () => {});

});
