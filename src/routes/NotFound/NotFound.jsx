import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Parece que te has perdido...</p>
                <p className="not-found-description">
                    La página que estás buscando no existe.
                </p>
                <Link to="/" className="not-found-link">
                    Volver a la página de inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
