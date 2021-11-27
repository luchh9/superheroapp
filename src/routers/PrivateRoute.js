import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const user = sessionStorage.getItem("token");
  console.log("token del usuario", user);

  return (
    <Route {...rest}>{user ? <Component /> : <Redirect to="/login" />}</Route>
  );
}
export default PrivateRoute;
