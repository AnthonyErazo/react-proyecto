import { useEffect, useState } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useCartContext } from "../../context/cart"
import './Cart.css'
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {clearCart,cartProduct} =useCartContext();
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
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>Regresar
      </button>
    </Link>
    {isLoading?<Loading />:
    <div className="cart-container">
      {cartProduct.length==0?
      <div className="text-cart-empty">
        No hay productos en su carrito
      </div>
      :<><h2 className="tittle-product-cart">Productos</h2>
      <div className="container-product-cart">
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
        <p>
          Total: ${cartProduct.reduce((total, product) => {
            const subtotal = product.price * product.cantidad;
            return total + subtotal;
            }, 0)}
        </p>
      </div>
      <div className="buttons-cart">
        <button style={{width:'40%'}} className="cart-button-action" onClick={clearCart}>
          Vaciar productos
        </button>
        <Link className="cart-button-action-link" to={'/formulario'}>
          <button className="cart-button-action">
            Realizar Compra
          </button>
        </Link>
      </div>
      </>
      }
    </div>}
    </>
  )
}

export default Cart