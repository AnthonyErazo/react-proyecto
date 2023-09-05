import { useModalContext } from '../../context/modal';
import { Link } from 'react-router-dom';
import './Modalview.css';

const ModalView = () => {
    const {viewProduct,modalButtonX,modalViewButton}=useModalContext();
  return (
    <div className={`window-modal ${modalButtonX?'':'close'}`}>
        <div className="window-container">
            <button className="close-button" onClick={modalViewButton}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" className="iconX">
                    <path
                        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                    </path>
                </svg></button>
            <div className="product-modal">
                <div className="product-view-img">
                    <img src={viewProduct.image} alt={viewProduct.name} />
                    <img src={viewProduct.imagen2} alt={viewProduct.name} />
                </div>
                <div className="product-view-info">
                    <h1>Producto añadido correctamente al carrito!</h1>
                    <h2>{viewProduct.name}</h2>
                    <p>${viewProduct.price}</p>
                    <p>{viewProduct.description}</p>
                    <Link to='/carrito' className='go-cart-modal-link'>
                        <button className='go-cart-modal'>
                            Ir al carrito
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalView
