import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const buscarId = (id) => {
        return products.find((a) => a.id === id);
    }
    return (
        <ProductContext.Provider
            value={{
                products,
                buscarId,
                setProducts
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext() {
    return useContext(ProductContext);
}
export default ProductProvider