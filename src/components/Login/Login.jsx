import { addDoc, collection} from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../../firebase/client";
import Formulario from "../Formulario/Formulario";
import { useCartContext } from "../../context/cart";
import './Login.css';

const Login = ({buyProducts,formRegister}) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [pais, setPais] = useState("");
    const [correo, setCorreo] = useState("");
    const [errores, setErrores] = useState({});
    const { clearCart,cartProduct } = useCartContext();
    const eliminarForm=()=>{
        setNombre("");
        setApellido("");
        setDireccion("");
        setTelefono("");
        setPais("");
        setCorreo("");
    }
    function validarCorreo(mail) {
        const regexCorreo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return regexCorreo.test(mail);
    }
    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
    };

    const handleDireccionChange = (e) => {
        setDireccion(e.target.value);
    };

    const handleTelefonoChange = (e) => {
        setTelefono(e.target.value);
    };

    const handlePaisChange = (e) => {
        setPais(e.target.value);
    };

    const handleCorreoChange = (e) => {
        setCorreo(e.target.value);
    };
    const handleSubmit = (e) => {
        setErrores({});
        e.preventDefault();
        const errores = {};
        if (!nombre) {
            errores.nombre = "El nombre es obligatorio!";
        }
        if (!apellido) {
            errores.apellido = "El apellido es obligatorio!";
        }
        if (!direccion) {
            errores.direccion = "La dirección es obligatoria!";
        }
        if (!telefono) {
            errores.telefono = "El teléfono es obligatorio!";
        }
        if (!pais) {
            errores.pais = "El país es obligatorio!";
        }
        if (!validarCorreo(correo)) {
            errores.correo = "El correo ingresado no es válido!";
            if (!correo) {
                errores.correo = "El correo es obligatorio!";
            }
        }

        if (Object.keys(errores).length > 0) {
            setErrores(errores);
            return;
        }
        const nuevoDato={ nombre, apellido, direccion, telefono, pais, correo, cartProduct }
        const agregarDato = async () => {
            try {
                addDoc(collection(firestore, "clientes"), nuevoDato);
                clearCart();
            } catch (error) {
                console.error("Error al agregar el documento: ", error);
            }
        };
        agregarDato();
        eliminarForm();
    };



    return (
        <div className={`form-buy-container ${buyProducts?'open':''}`}>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="form-buy">
                <form onSubmit={handleSubmit}>
                    <h2>Formulario de Compra</h2>
                    <Formulario
                        value={nombre}
                        title={"nombre"}
                        handleChange={handleNombreChange}
                        errores={errores.nombre}
                    />
                    <Formulario
                        value={apellido}
                        title={"apellido"}
                        handleChange={handleApellidoChange}
                        errores={errores.apellido}
                    />
                    <Formulario
                        value={direccion}
                        title={"direccion"}
                        handleChange={handleDireccionChange}
                        errores={errores.direccion}
                    />
                    <Formulario
                        value={telefono}
                        title={"telefono"}
                        handleChange={handleTelefonoChange}
                        errores={errores.telefono}
                    />
                    <Formulario
                        value={pais}
                        title={"pais"}
                        handleChange={handlePaisChange}
                        errores={errores.pais}
                    />
                    <Formulario
                        value={correo}
                        title={"correo"}
                        handleChange={handleCorreoChange}
                        errores={errores.correo}
                    />
                    <div className="form-buttons">
                        <button className="button-form" type="submit">Enviar</button>
                        <button className="button-form" type="button" onClick={formRegister}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login