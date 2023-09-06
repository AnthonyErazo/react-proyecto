import ItemCount from "../ItemCount/ItemCount";
import ItemImg from "../ItemImg/ItemImg";
import './Item.css'

const Item = ({ item }) => {
    return (
        <div className="item-container">
            <div className="item-img">
                <ItemImg 
                name={item.name}
                image={item.image}
                imagen2={item.imagen2}
                idImagen={'img-zoom'}/>
            </div>
            <div className="item-info">
                <h1>{item.name}</h1>
                <p>Precio: ${item.price}</p>
                <p>{item.description}</p>
                <ItemCount id={item.id} stock={item.stock} initial={1} />
            </div>
        </div>
    );
}

export default Item