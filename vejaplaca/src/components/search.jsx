import React from "react";
import Styles from "./styles/search.module.css";
import { Link } from "react-router-dom";
function Search() {
  return (
    <>
      <div className={Styles.div_search}>
        <p>Digite Sua Placa</p>
        <input className={Styles.input} placeholder="ABC-1D23" type="text" />
        <button className={Styles.button}>
          <Link className={Styles.link} to="/placa">
            Search
          </Link>
        </button>
      </div>
    </>
  );
}

export default Search;
