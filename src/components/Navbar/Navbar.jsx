import { useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Submenu from '../Submenu/Submenu';
import { getItems } from '../../routes/mockasync';

const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const [clickMenu,setClickMenu]=useState(false);
  const [submenuItems, setSubmenuItems] = useState([]);
  const [items, setItems] = useState([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const categorys=new Set();
  const subCategorys=new Set();
  useEffect(()=>{
      getItems()
          .then(item=>setItems(item))
          .catch(error=>console.error(error));
  },[]);
  items.forEach(element => {
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
        <CartWidget item={0}/>
    </nav>
    {isOverlayVisible && <div className="overlay"></div>}
  </>
  )
}

export default Navbar