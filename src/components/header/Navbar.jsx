import { useState } from 'react'
import CartWidget from './CartWidget'
import './Header.css'

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
          <li><a href="./">Lo último</a></li>
          <li><a href="./">Hombre</a></li>
          <li><a href="./">Mujer</a></li>
          <li><a href="./">Contacto</a></li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default Navbar