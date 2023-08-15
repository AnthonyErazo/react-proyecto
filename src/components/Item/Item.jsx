import ItemCount from "../ItemCount/ItemCount";
import './Item.css'

const Item = ({ item }) => {
    return (
        <>
            {item.map((i) => {
                return (
                    <div key={i.id} className="item-container">
                        <h1>{i.name}</h1>
                        <p>{i.description}</p>
                        <p>{i.price}</p>
                        <ItemCount stock={i.stock} initial={1} onAdd={(q) => console.log(q)} />
                    </div>);
            })}
        </>
    );
}

export default Item