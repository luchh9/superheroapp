import React from "react";

function NavBar() {
  const Logout = () => {
    const user = sessionStorage.getItem("token");
    sessionStorage.removeItem("token");
    window.location.reload(false);

    console.log("TOKEN eliminado?", user);
  };
  return (
    <React.Fragment>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <button onClick={Logout} class="btn btn-dark">
            Cerrar Sesion
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
}
export default NavBar;
