import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const handleFacebookClick = () => {
        window.open("https://www.facebook.com", "_blank");
    };
    const handleTwitterClick = () => {
        window.open("https://twitter.com", "_blank");
    };
    const handleInstagramClick = () => {
        window.open("https://www.instagram.com", "_blank");
    };
    const handleYouTubeClick = () => {
        window.open("https://www.youtube.com", "_blank");
    };
    return (
        <>
            <footer>
                <div className="container">
                    <div className="sec aboutus">
                        <h2>Acerca de nosotros</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat quam, non inventore hic praesentium blanditiis voluptatibus nemo, dolores, quasi eaque eos modi. Praesentium necessitatibus tempora soluta nesciunt sint amet.</p>
                        <ul className="sci">
                            <li><a onClick={handleFacebookClick}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a onClick={handleTwitterClick}><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a onClick={handleInstagramClick}><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a onClick={handleYouTubeClick}><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Acceso rápido</h2>
                        <ul>
                            <li><Link to={"/"}>Inicio</Link></li>
                            <li><Link to={"/"}>Productos</Link></li>
                            <li><Link to={"/categoria/accesorio"}>Accesorios</Link></li>
                            <li><Link to={"/categoria/zapatilla"}>Zapatillas</Link></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Tienda</h2>
                        <ul>
                            <li><Link to="/categoria/pantalones">Pantalones</Link></li>
                            <li><Link to="/categoria/polo">Polos</Link></li>
                            <li><Link to="/categoria/casaca">Casaca</Link></li>
                            <li><Link to="/categoria/polera">Poleras</Link></li>
                            <li><Link to="/categoria/camisa">Camisas</Link></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2>Contacto</h2>
                        <ul className="info">
                            <li>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span>Lima,<br />Peru</span>
                            </li>
                            <li>
                                <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                                <p><Link to="tel:+12345678900">+1 234 567 8900</Link><br /><Link to="tel:+12345678900">+1 234 567 8900</Link></p>
                            </li>
                            <li>
                                <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                <p><Link to="mailto:email123@email.com">email123@email.com</Link></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyrightText">
                <p>Copyright &copy; 2023 Anthony Erazo</p>
            </div>
        </>
    )
}

export default Footer