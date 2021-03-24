import {createContext, ReactNode, useContext, useState} from "react";
import Modal from '@atlaskit/modal-dialog';


const ModalContext = createContext<Partial<{
  addModal: (newModal: ReactNode) => void
  removeModal: (modal: ReactNode) => void
}>>({})

export const WithModal = ({children}: { children: any }) => {
  const [modals, setModals] = useState<Set<ReactNode> | null>(null)

  function closeModal(modal: ReactNode) {
    modals?.delete(modal)
    setModals(new Set(modals))
  }

  return <>
    <ModalContext.Provider value={{
      addModal: (newModal: ReactNode) => setModals(new Set([...(modals ? modals : []), newModal])),
      removeModal: (modal: ReactNode) => {
        closeModal(modal)
      }
    }}>
      {children}
      {modals && [...modals].map(it =>
        <Modal onClose={()=>closeModal(it)}>
          {it}
        </Modal>
      )}
    </ModalContext.Provider>
  </>
}


export const useModal = () => {
  const modalContext = useContext(ModalContext)
  return {
    showModal: (render: (closeModal: () => void) => ReactNode) => {
      const closeModal = () => {
        modalContext.removeModal && modalContext.removeModal(modal)
      }
      const modal = render(closeModal)
      modalContext?.addModal && modalContext.addModal(modal)
      return closeModal
    }
  }
}