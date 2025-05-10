import React from "react";
import Styles from "./styles/footer.module.css";
import Logo from "../assets/LogoNav.svg";
import Call from "../assets/call.svg";
import Email from "../assets/email.svg";
import Instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.containerInfo}>
          <Link className={Styles.Link} to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className={Styles.containerInfoLinks}>
            <img src={Call} alt="Celular" />
            <p>(81)98114-0127</p>
          </div>
          <div className={Styles.containerInfoLinks}>
            <img src={Email} alt="email" />
            <Link className={Styles.Link}>
              <p>vejaplacas@hotmail.com</p>
            </Link>
          </div>
        </div>
        <div className={Styles.containerSocial}>
          <p>Nos Siga!</p>
          <div>
            <Link className={Styles.Link}>
              <img src={Instagram} alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
