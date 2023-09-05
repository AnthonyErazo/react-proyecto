import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { firestore } from '../firebase/client';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    const [products, setProducts] = useState([]);
    const buscarId = (id) => {
        return products.find((a) => a.id === id);
    }
    useEffect(() => {
        const docRef = collection(firestore, "productos");
        getDocs(docRef)
        .then(snapshot => {
            const productData = snapshot.docs.map((doc) => doc.data());
            const uniqueProducts = new Set();

            const productPromises = productData.map((product) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        if (product.stock > 0) {
                            uniqueProducts.add(product);
                        }
                        resolve();
                    };
                    img.onerror = () => {
                        resolve();
                    };
                    img.src = product.image;
                });
            });
            Promise.all(productPromises).then(() => {
                setIsLoadingProducts(false);
                const sortedProducts = [...uniqueProducts];
                sortedProducts.sort((a, b) => a.id - b.id);
                setProducts(sortedProducts);
            });
        }).catch((error) => console.error(error));
    }, []);
    return (
        <ProductContext.Provider
            value={{
                isLoadingProducts,
                products,
                buscarId
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext() {
    return useContext(ProductContext);
}
export default ProductProvider