import { createContext, useContext, useState } from "react"

export const CartContext=createContext([]);

const CartProvider = ({children}) => {
    const [cartAside,setCartAside]=useState(false);
    const [cartProduct,setCartProduct]=useState([]);
    const [cartNum,setCartNum]=useState(0);
    const clearCart =()=>{
        setCartProduct([]);
        setCartNum(0);
    }
    const cartAsideView = ()=>{
        setCartAside(!cartAside);
    }
    const cantidadPorId=(idProduct)=>{
        const productCart = cartProduct.find(p=>{
            if(p.id==idProduct){
                return p;
            }
        });
        return productCart?productCart.cantidad:0;
    }
    const cartAddProduct=(product,quantity)=>{
        if(cartProduct.find((p)=>p.id==product.id)){
            const updatedCart = cartProduct.map((p) =>
                p.id === product.id ? { ...p, cantidad: p.cantidad + quantity } : p
            );
            setCartProduct(updatedCart);
        }else{
            setCartProduct([...cartProduct, { ...product, cantidad: quantity }]);
        }
        setCartNum(cartNum+quantity);
    }
    const eliminateCartProduct=(product)=>{
        const updatedCart = cartProduct.filter((item) => item.id !== product.id);
        const totalQuantity = updatedCart.reduce((total, item) => total + item.cantidad, 0);
        setCartNum(totalQuantity);
        setCartProduct(updatedCart);
    }
  return (
    <CartContext.Provider 
        value={{
            cartAside,
            cartAsideView,
            cartProduct,
            cartAddProduct,
            eliminateCartProduct,
            cartNum,
            cantidadPorId,
            clearCart
        }}>
        {children}
    </CartContext.Provider>
  )
}

export function useCartContext(){
    return useContext(CartContext);
}

export default CartProvider;