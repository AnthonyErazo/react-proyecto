import { Link } from "react-router-dom";
import './Submenu.css';

const Submenu = ({ items,aux }) => {
    return (
        <ul className="submenu">
            {items.map((item, index) => (
                <li key={index} className="submenu-item">
                    <Link className="submenu-item-link" to={aux?`/categoria/accesorio/${item}`:`/categoria/${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Submenu;