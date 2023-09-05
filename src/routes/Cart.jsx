import CartProduct from "../components/CartProduct/CartProduct";
import { useCartContext } from "../context/cart"

const Cart = () => {
  const {cartProduct} =useCartContext();
  return (
    <div>
      {cartProduct==''?"a"
      :cartProduct.map((product)=>{
        <CartProduct 
        key={product.id}
        />
      })}
    </div>
  )
}

export default Cart