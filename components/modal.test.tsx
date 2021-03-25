import {configure, render, screen} from '@testing-library/react';
import { useModal, WithModal } from './modal';

configure({testIdAttribute: 'data-test'})

const TestComponent = () => {
  const { showModal } = useModal();
  return (
    <>
      <button
        data-test="Button-ShowModal"
        onClick={() => {
          showModal((closeModal) => (
            <div data-test="Modal">
              <h1>Test Modal</h1>
              <button onClick={closeModal} data-test="Button-CloseModal">Close</button>
            </div>
          ));
        }}
      >
        Show
      </button>
    </>
  );
};

describe('modal tests', () => {
  it('should display and close modal', () => {
    render(
      <WithModal>
        <TestComponent />
      </WithModal>,
    );

    screen.getByTestId('Button-ShowModal').click();
    expect(screen.queryByTestId('Modal')).toBeTruthy();
    screen.getByTestId('Button-CloseModal').click();
    expect(screen.queryByTestId('Modal')).toBeFalsy();
  });
});
