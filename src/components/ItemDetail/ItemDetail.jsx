import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';

function ItemDetail({id,name,description,stock,price,image}) {
    return (
        <div className="card-product">
            <img src={image} alt={name} />
            <div className="info">
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
                <ItemCount stock={stock} initial={1} onAdd={(q)=>console.log(q)} />
                <button className="ver-mas">
                    <Link className="ver-mas-link" to={`/producto/${id}`} >Ver mas</Link>
                </button>
            </div>
        </div>
    )
}

export default ItemDetail;