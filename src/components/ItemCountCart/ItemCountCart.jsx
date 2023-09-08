import { useCartContext } from "../../context/cart"

const ItemCountCart = ({id,stock,cantidad}) => {
    const{cantidadPorId}=useCartContext();
    console.log(cantidadPorId(id));
  return (
    <p>
        {cantidad}
    </p>
  )
}

export default ItemCountCart