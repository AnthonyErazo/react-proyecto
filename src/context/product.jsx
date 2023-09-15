import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const[productsTotal,setProductsTotal]=useState([]);
    const [products, setProducts] = useState([]);
    const buscarId = (id) => {
        return productsTotal.find((a) => a.id === id);
    }
    return (
        <ProductContext.Provider
            value={{
                products,
                buscarId,
                setProducts,
                productsTotal,
                setProductsTotal
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext() {
    return useContext(ProductContext);
}
export default ProductProvider