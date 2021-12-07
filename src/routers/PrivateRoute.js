import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  //TOKEN
  const user = localStorage.getItem("token");

  return (
    <Route {...rest}>{user ? <Component /> : <Redirect to="/login" />}</Route>
  );
}
export default PrivateRoute;
