import Logo from "../assets/logoipsum.svg";
import { NavLink } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

export const Navbar = () => (
  <div className={NavbarCSS.nav}>
    <img src={Logo} alt="Logo" className="logo" />
    <NavLink to="/">Home</NavLink>
    <NavLink to="/product">Product</NavLink>
    <NavLink to="/">Sign in</NavLink>
  </div>
);
