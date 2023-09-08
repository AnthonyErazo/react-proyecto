import { useEffect, useState } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useCartContext } from "../../context/cart"
import './Cart.css'
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [buyProducts, setBuyProducts] = useState(false);
  const {clearCart,cartProduct} =useCartContext();
  const formRegister=()=>{
    setBuyProducts(!buyProducts);
  }
  useEffect(()=>{
    if (cartProduct.length == 0) {
      setIsLoading(false);
      return;
    }
    const imagePromises = cartProduct.map((product) => {
      const img1Promise = new Promise((resolve) => {
        const img1 = new Image();
        img1.onload = () => {
          resolve();
        };
        img1.src = product.image;
      });
      const img2Promise = new Promise((resolve) => {
        const img2 = new Image();
        img2.onload = () => {
          resolve();
        };
        img2.src = product.imagen2;
      });
      return Promise.all([img1Promise, img2Promise]);
    });
    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
    });
  },[cartProduct]);
  return (
    <>
    <Link to={'/'}>
        <button className="regresar-inicio">
          Regresar
        </button>
      </Link>
    {isLoading?<Loading />:
    <div className="cart-container">
      {cartProduct.length==0?
      <div className="text-cart-empty">
        No hay productos en su carrito
      </div>
      :<><div className="container-product-cart">
      <div className="tittle-cart">
        <p>Producto</p>
        <p>Nombre</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Subtotal</p>
      </div>
      {cartProduct.map((product)=>{
        return <CartProduct 
        key={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        imagen2={product.imagen2}
        cantidad={product.cantidad}
        id={product.id}
        stock={product.stock}
        />})}
      </div>
      <div className="total">
        Total: ${cartProduct.reduce((total, product) => {
          const subtotal = product.price * product.cantidad;
          return total + subtotal;
          }, 0)}
      </div>
      <button className="clear-cart" onClick={clearCart}>
        Vaciar productos
      </button>
      <button className="clear-cart" onClick={formRegister}>
        Realizar Compra
      </button>
      </>
      }
    </div>}
    <Login 
    buyProducts={buyProducts}
    formRegister={formRegister}
    />
    </>
  )
}

export default Cart