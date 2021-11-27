import React from "react";
import { useHistory } from "react-router-dom";

function NotFound(props) {
  let history = useHistory();

  const BackHistory = () => {
    history.goBack();
  };

  return (
    <div className="centrado">
      <div className="centrar">
        <h1 className="text-uppercase">{props.msg}</h1>
        <button className="btn btn-dark " onClick={BackHistory}>
          Volver
        </button>
      </div>
    </div>
  );
}
export default NotFound;
