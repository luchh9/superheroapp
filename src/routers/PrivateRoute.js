import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  //TOKEN
  const user = sessionStorage.getItem("token");
  console.log("Token:", user);

  return (
    <Route {...rest}>{user ? <Component /> : <Redirect to="/login" />}</Route>
  );
}
export default PrivateRoute;
