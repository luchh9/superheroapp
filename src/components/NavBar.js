import React from "react";
import "./NavBar.css";
import pikachu from "../pikachu.png";
import scyther from "../scyther.png";

import logo from "../pokelogo.png";

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <img className="logo" src={pikachu} alt="" />
          <img className="logo" src={logo} alt="" />
          <img className="logo" src={scyther} alt="" />
          <input className="busqueda" type="text" />
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
