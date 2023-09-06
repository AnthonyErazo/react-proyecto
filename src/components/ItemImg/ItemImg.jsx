import { useEffect } from 'react';
import './ItemImg.css';

const ItemImg = ({image,imagen2,name,idImagen}) => {
    useEffect(()=>{
        let zoom = document.querySelector('.zoom');
        let imgZoom = document.getElementById(idImagen);

        function handleMouseMove (event){
            imgZoom.style.opacity = 1;
            let positionPx = event.x - zoom.getBoundingClientRect().left;
            let positionX = (positionPx / zoom.offsetWidth) * 100;

            let positionPy = event.y - zoom.getBoundingClientRect().top;
            let positionY = (positionPy / zoom.offsetHeight) * 100;

            imgZoom.style.setProperty('--zoom-x', positionX + '%');
            imgZoom.style.setProperty('--zoom-y', positionY + '%');

            let transformX = -(positionX - 50) / 3.5;
            let transformY = -(positionY - 50) / 3.5;
            imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
        }
        function handleMouseLeave(){
            imgZoom.style.opacity = 0;
        }

        zoom.addEventListener('mousemove', handleMouseMove);
        zoom.addEventListener('mouseout', handleMouseLeave);

        return() => {
            zoom.removeEventListener('mousemove', handleMouseMove);
            zoom.removeEventListener('mouseout', handleMouseLeave);
        };
    },[]);

    return (
        <div className="zoom">
            <figure>
                <img src={image} alt={name} />
                <img src={imagen2} alt={name} />
            </figure>
            <figure id={idImagen}>
                <img src={image} alt={name}/>
                <img src={imagen2} alt={name} />
            </figure>
        </div>
    );
};

export default ItemImg;
