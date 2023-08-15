import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-message">Cargando...</p>
        </div>
    );
};

export default Loading;
