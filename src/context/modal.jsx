import { createContext, useContext,useState } from 'react'

export const ViewModal = createContext([]);

const ModalProvider = ({children}) => {
    const [modalButtonX,setModalButtonX]=useState(false);
    const [viewProduct,setViewProduct]=useState([])
    const modalViewButton = () => {
        setModalButtonX(!modalButtonX);
    }
    const modalViewProduct=(product)=>{
      setViewProduct(product);
    }
  return (
    <ViewModal.Provider
      value={{
        modalButtonX,
        modalViewButton,
        modalViewProduct,
        viewProduct
      }}
    >
      {children}
    </ViewModal.Provider>
  )
}

export function useModalContext() {
  return useContext(ViewModal);
}

export default ModalProvider;