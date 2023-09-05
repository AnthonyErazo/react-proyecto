import './CartProduct.css'

const CartProduct = ({image,name,price,cantidad}) => {
  return (
    <div className='cart-product-container'>
        <div className='product-cart-img'>
            <img src={image} alt={name} />
        </div>
        <div className='product-cart-info'>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default CartProduct