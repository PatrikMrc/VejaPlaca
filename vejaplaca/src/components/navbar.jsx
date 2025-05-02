import React from "react";
import Logo from "../assets/LogoNav.svg";
import Styles from "./styles/navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className={Styles.nav}>
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className={Styles.mid}>
          <Link className={Styles.a}>Perguntas Frequentes</Link>
          <Link className={Styles.a}>Como Isso Funciona ?</Link>
          <Link to="/suporte" className={Styles.a}>
            Suporte
          </Link>
        </div>
        <div className={Styles.div_buttons}>
          <button className={Styles.button1}>Sign In</button>
          <button className={Styles.button2}>Sign Up</button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
