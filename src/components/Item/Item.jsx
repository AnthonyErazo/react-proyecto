import ItemCount from "../ItemCount/ItemCount";
import './Item.css'

const Item = ({ item }) => {
    return (
        <div className="item-container">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
                <h1>{item.name}</h1>
                <p>Precio: ${item.price}</p>
                <p>{item.description}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={(q) => console.log(q)} />
            </div>
        </div>
    );
}

export default Item