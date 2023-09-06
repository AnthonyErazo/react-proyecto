import { useEffect, useState } from "react"
import './ItemCount.css';
import { useModalContext } from "../../context/modal";
import { useProductContext } from "../../context/product";
import { useCartContext } from "../../context/cart";
import { useLocation } from "react-router-dom";

const ItemCount = ({id,stock,initial}) => {
    const [quantity,setQuantity]=useState(initial);
    const [quantityLimit,setQuantityLimit]=useState(stock);
    const {modalViewProduct,modalViewButton}=useModalContext();
    const {cantidadPorId,cartAddProduct,cartProduct}=useCartContext();
    const {buscarId}=useProductContext();
    const location2=useLocation();
    useEffect(()=>{
        setQuantityLimit(stock-cantidadPorId(id));
    },[cartProduct]);
    const increment=()=>{
        if(quantity<quantityLimit){
            setQuantity(quantity+1)
            if(location2.pathname=='/carrito'){
                cartAddProduct(buscarId(id),quantity);
            }
        }
    }
    const decrement=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
            if(location2.pathname=='/carrito'){
                cartAddProduct(buscarId(id),quantity);
            }
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
                <button className={`button counter-control ${(quantity==quantityLimit)||(quantityLimit==0)?'disabled':''}`} onClick={increment}>+</button>
            </div>
            {location2.pathname=='/carrito'?<></>:<div className="button-add">
                <button className={`button ${quantityLimit==0?'disabled':''}`} onClick={onAdd} disabled={quantityLimit==0}>
                    Agregar
                </button>
            </div>}
        </div>
    )
}

export default ItemCount
