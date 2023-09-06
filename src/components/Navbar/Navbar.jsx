import {useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import Submenu from '../Submenu/Submenu';
import { useProductContext } from '../../context/product';
import { useCartContext } from '../../context/cart';
import ModalCart from '../ModalCart/ModalCart';

const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const [clickMenu,setClickMenu]=useState(false);
  const [submenuItems, setSubmenuItems] = useState([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const {products}=useProductContext();
  const {cartNum,cartAside}=useCartContext();
  const location=useLocation();
  const categorys=new Set();
  const subCategorys=new Set();
  products.forEach(element => {
    if(element.category=="accesorio"){
      subCategorys.add(element.subcategory);
    }else if(element.category!="zapatilla"){
      categorys.add(element.category);
    }
  });
  
  const handleMouseEnter = (category) => {
    setSubmenuItems(category);
  };
  return (
    <>
    <nav>
        <div className={`menu ${clickMenu?'active':''}`} onClick={()=>{
          setClickMenu(!clickMenu);
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className="title">
          <Link to="/" className="title-link">ClothingUrban</Link>
        </h3>
        <ul className={menuOpen? "open":""}>
          <li className="nav-item-container"
          onMouseEnter={()=>setIsOverlayVisible(true)}
          onMouseLeave={()=>setIsOverlayVisible(false)}><Link 
          to="/" 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter(Array.from(categorys))}
          >
            Ver todo
          </Link>
          <Submenu
              items={submenuItems}
              aux={false}
            />
          </li>
          <li className="nav-item-container"
          onMouseEnter={()=>setIsOverlayVisible(true)}
          onMouseLeave={()=>setIsOverlayVisible(false)}><Link 
          to="/categoria/accesorio" 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter(Array.from(subCategorys))}
          >
            Accesorios
          </Link>
          <Submenu
              items={submenuItems}
              aux={true}
            />
          </li>
          <li className="nav-item-container"><Link 
          to="/categoria/zapatilla" 
          className="nav-item"
          >
            Zapatillas
          </Link></li>
        </ul>
        <CartWidget item={cartNum} enable={location.pathname === '/carrito'}/>
    </nav>
    {isOverlayVisible && <div className="overlay"></div>}
    {location.pathname === '/carrito' ? <></>: (cartAside ? <ModalCart /> : <></>) }
  </>
  )
}

export default Navbar