import {useModal, WithModal} from "./Modal"
// import {render, screen} from "@testing-library/react"

const TestComponent = () => {
    const {showModal} = useModal()
    return <>
        <button
            data-testid={"Button-ShowModal"}
            onClick={() => {
                showModal((closeModal) =>
                    <div data-testid={"Modal"}>
                        <h1>Test Modal</h1>
                        <button onClick={closeModal} data-testid={"Button-CloseModal"}>Close</button>
                    </div>
                )
            }}
        >Show
        </button>
    </>
}

//
// it("should display and close modal", () => {
//     render(
//         <WithModal>
//             <TestComponent/>
//         </WithModal>
//     )
//
//     screen.getByTestId("Button-ShowModal").click()
//     expect(screen.queryByTestId("Modal")).toBeTruthy()
//     screen.getByTestId("Button-CloseModal").click()
//     expect(screen.queryByTestId("Modal")).toBeFalsy()
// })