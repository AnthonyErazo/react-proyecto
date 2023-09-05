import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';
import { useEffect, useState } from "react";

function ItemDetail({id,name,stock,price,image,imagen2}) {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(image);
    const [isImage2Valid, setIsImage2Valid] = useState(true);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (isImage2Valid) {
            setCurrentImage(imagen2);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setCurrentImage(image);
    };

    useEffect(() => {
        const img = new Image();
        img.src = imagen2;
        img.onload = () => {
            setIsImage2Valid(true);
        };
        img.onerror = () => {
            setIsImage2Valid(false);
        };
    }, [imagen2]);

    return (
        <div className="card-product" to={`/producto/${id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="img-container">
                <Link to={`/producto/${id}`}>
                    <img src={currentImage} alt={name} />
                </Link>
                <Link className={`ver-mas-link ${isHovered?'ocultar-ver-mas':''}`} to={`/producto/${id}`} >
                    <button className="ver-mas">
                        Ver mas
                    </button>
                </Link>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <p>${price}</p>
                <ItemCount id={id} stock={stock} initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail;