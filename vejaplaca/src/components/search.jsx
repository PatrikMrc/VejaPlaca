import React from "react";
import Styles from "./styles/search.module.css";
function Search() {
  return (
    <>
      <div className={Styles.div_search}>
        <p>Digite Sua Placa</p>
        <input className={Styles.input} placeholder="ABC-1D23" type="text" />
        <button className={Styles.button}>Search</button>
      </div>
    </>
  );
}

export default Search;
