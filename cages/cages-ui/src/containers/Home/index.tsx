import React from "react";
import NavBar from "../../components/NavBar";
import Projects from "../Projects";
import Styles from "./styles.module.scss";

function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <Projects></Projects>
    </>
  );
}

export default HomePage;
