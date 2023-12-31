import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart';
import ModalCartProduct from '../ModalCartProduct/ModalCartProduct';
import './ModalCart.css';

const ModalCart = () => {
  const {cartAsideView,cartProduct}=useCartContext();
  return (
    <aside className="modal-cart-container">
        <div className='cart-modal-content'>
          {cartProduct==''?
          <div className='empty-modal-cart'>
            No hay productos
          </div>
          :cartProduct.map((product)=>{
            return (
              <ModalCartProduct
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                cantidad={product.cantidad}
              />
            );
          })}
        </div>
        <Link className='go-cart-link' to={'/carrito'} onClick={cartAsideView}>
            <button className='go-cart'>
                Ir al carrito
            </button>
        </Link>
    </aside>
  )
}

export default ModalCart