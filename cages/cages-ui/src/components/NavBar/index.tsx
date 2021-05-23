import React from "react";
import Styles from "./styles.module.scss";

function NavBar() {
  return (
    <div className={Styles.navbar}>
      <a className={Styles.active} href="#home">
        Projects
      </a>
      <a href="#news">Tasks</a>
      <a href="#mail">Mail</a>
      <a href="#jira">Jira</a>
      <a href="#github">GitHub</a>
      <a href="#about">About</a>
    </div>
  );
}

export default NavBar;
