import { useState } from "react"
import './ItemCount.css';
import { useModalContext } from "../../context/modal";
import { useProductContext } from "../../context/product";
import { useCartContext } from "../../context/cart";

const ItemCount = ({id,stock,initial}) => {
    const [quantity,setQuantity]=useState(initial);
    const {modalViewProduct,modalViewButton}=useModalContext();
    const {cartAddProduct}=useCartContext();
    const {buscarId}=useProductContext();
    const increment=()=>{
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }
    const decrement=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    const onAdd=()=>{
        setQuantity(1);
        modalViewButton();
        modalViewProduct(buscarId(id));
        cartAddProduct(buscarId(id),quantity);

    }
    return (
        <div className="counter">
            <div className="controls">
                <button className={`button counter-control ${quantity==1?'disabled':''}`} onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className={`button counter-control ${quantity==stock?'disabled':''}`} onClick={increment}>+</button>
            </div>
            <div className="button-add">
                <button className="button" onClick={onAdd} disabled={!stock}>
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ItemCount
