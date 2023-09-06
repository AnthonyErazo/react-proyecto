import { useCartContext } from '../../context/cart'
import { useProductContext } from '../../context/product';
import EliminatedItem from '../Elimiteditem/EliminatedItem';
import './ModalCartProduct.css'

const ModalCartProduct = ({id,image,name,price,cantidad}) => {
    
    
  return (
    <div className='modal-cart-product'>
        <div className='modal-cart-img'>
            <img src={image} alt={name} />
        </div>
        <div className='modal-cart-info-product'>
            <h2>{name}</h2>
            <div className='modal-cart-info'>
                <p>Precio: ${price} <br />
                Cantidad: {cantidad} <br />
                Total: ${price*cantidad}</p>
                <EliminatedItem 
                id={id}
                />
            </div>
        </div>
    </div>
  )
}

export default ModalCartProduct