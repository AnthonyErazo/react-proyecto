import { useState } from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'
import LinksNavbar from './LinksNavbar';

const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const [clickMenu,setClickMenu]=useState(false);
  return (
    <nav>
        <div className={`menu ${clickMenu?'active':''}`} onClick={()=>{
          setClickMenu(!clickMenu);
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className="title">ClothingUrban</h3>
        <ul className={menuOpen? "open":""}>
          <LinksNavbar link="./" text="Lo último"/>
          <LinksNavbar link="./" text="Hombre"/>
          <LinksNavbar link="./" text="Mujer"/>
          <LinksNavbar link="./" text="Contacto"/>
        </ul>
        <CartWidget item={10}/>
    </nav>
  )
}

export default Navbar