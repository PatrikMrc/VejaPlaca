import React from "react";
import Logo from "../assets/LogoNav.svg";
import Styles from "./styles/navbar.module.css";
function Navbar() {
  return (
    <>
      <nav className={Styles.nav}>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className={Styles.mid}>
          <a className={Styles.a} href="#">
            Perguntas Frequentes
          </a>
          <a className={Styles.a} href="#">
            Como Isso Funciona ?
          </a>
          <a className={Styles.a} href="#">
            Suporte
          </a>
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
