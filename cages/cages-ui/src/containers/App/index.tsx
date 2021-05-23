import React from "react";
import Home from "../Home";
import { IProps } from "./interface";
import Styles from "./styles.module.scss";

const App: React.FC<IProps> = () => {
  return (
    <div className={Styles.app}>
      <Home></Home>
    </div>
  );
};

export default App;
