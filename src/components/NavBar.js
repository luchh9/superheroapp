import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/statics/home-icon.png";
import heroe from "../assets/statics/heroe-icon.png";
import logout from "../assets/statics/logout-icon.png";

function NavBar() {
  const Logout = () => {
    //ELIMINO LOS DATOS GUARDADOS
    localStorage.removeItem("token");
    localStorage.removeItem("heroes");
    //REDIRECCION AL LOGIN POR DEFECTO
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <ul className=" d-flex justify-content-between">
        <Link to="/Home">
          <li className="nav-item">
            <img src={home} alt="" />
          </li>
        </Link>

        <Link to="/Team">
          <li className="nav-item">
            <img src={heroe} alt="" />
          </li>
        </Link>
        <li className="nav-item">
          <button onClick={Logout} className="logout-button">
            <img src={logout} alt="" />
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
}
export default NavBar;
