import React from "react";
import { Link } from "react-router-dom";

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
      <ul className="nav d-flex justify-content-between">
        <Link to="/Home">
          <li className="nav-item">
            <button type="button" className="btn btn-light">
              Home
            </button>
          </li>
        </Link>

        <Link to="/Team">
          <li className="nav-item">
            <button type="button" className="btn btn-light">
              Team
            </button>
          </li>
        </Link>
        <li className="nav-item">
          <button onClick={Logout} className="btn btn-dark">
            Cerrar Sesion
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
}
export default NavBar;
