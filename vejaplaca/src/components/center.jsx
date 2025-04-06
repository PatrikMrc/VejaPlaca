import React from "react";
import Styles from "./styles/center.module.css";
import buttonGoogle from "../assets/google play.svg";
import buttonApple from "../assets/app store.svg";
import porsche from "../assets/porsche.svg";

function center() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.center}>
          <h1 className={Styles.title}>
            Quer Saber Mais ? <br />
            Consulte <span>Já</span>
          </h1>
          <p>
            Tenha acesso a informações completas e <br />
            confiáveis sobre qualquer <span>veículo</span> em <br />
            segundos!
          </p>
          <div className={Styles.div_buttons}>
            <button className={Styles.button}>
              <img src={buttonGoogle} alt="" />
            </button>
            <button className={Styles.button}>
              <img src={buttonApple} alt="" />
            </button>
          </div>
        </div>
        <div className={Styles.image}>
          <img src={porsche} alt="" />
        </div>
      </div>
    </>
  );
}

export default center;
