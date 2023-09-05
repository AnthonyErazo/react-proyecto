import { useEffect, useState } from "react";
import './ScrollTop.css'

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY>100?setIsVisible(true):setIsVisible(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Opcional, para una animación de desplazamiento suave
        });
    };

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="button-to-top" onClick={scrollTop}>
                <i className="fa-sharp fa-solid fa-arrow-up">adfasa</i>
            </div>
        </div>
    );
}

export default ScrollTop