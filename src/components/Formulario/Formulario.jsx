import './Formulario.css';

const Formulario = ({title,value,handleChange,errores}) => {
    return (
        <div className='formulario'>
            <label htmlFor={title}>{title}:</label>
            <input
                type={title=="telefono"?"number":"text"}
                id={title}
                value={value}
                onChange={handleChange}
                placeholder={`Ingrese su ${title}`}
            />
            {errores && <p className="error">{errores}</p>}
        </div>
    )
}

export default Formulario