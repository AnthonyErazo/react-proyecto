import { Link } from 'react-router-dom'
import EliminatedItem from '../Elimiteditem/EliminatedItem'
import ItemCount from '../ItemCount/ItemCount'
import './CartProduct.css'

const CartProduct = ({id,image,imagen2,name,price,cantidad,stock}) => {
  return (
    <div className='cart-product-container'>
        <Link className='product-cart-img'>
            <img src={image} alt={name} />
            <img src={imagen2} alt={name} />
        </Link>
        <h2>{name}</h2>
        <p>${price}</p>
        <div className='cart-count'>
            <EliminatedItem 
            id={id} 
            />
            <ItemCount
            id={id}
            stock={stock}
            initial={cantidad}
            />
        </div>
        <p>${price*cantidad}</p>
    </div>
  )
}

export default CartProduct