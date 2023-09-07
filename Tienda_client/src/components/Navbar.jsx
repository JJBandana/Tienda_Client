
import { NavLink } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  
  const [open,setOpen] = useState(false);
  
  const cambiarEstado = () => {
    setOpen(!open)
  }

  const control = open ? `${NavbarCSS.nav_items}`:`${NavbarCSS.nav_items_open}`

  return( 
  <div className={NavbarCSS.nav}>
    <div className={NavbarCSS.nav_logo}>CODE</div>
    <div className={control}>
      <NavLink className={NavbarCSS.nav_links} to="/">Home</NavLink>
      <NavLink className={NavbarCSS.nav_links} to="/product">Product</NavLink>
      <NavLink className={NavbarCSS.nav_links} to="/">Sign in</NavLink>
    </div>
    <div className={NavbarCSS.nav_toggle}>
      <button onClick={cambiarEstado}>abrir</button>
    </div>
  </div>
)
};


