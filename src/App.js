import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Formulario from "./components/Formulario";
import Home from "./components/Home";
import ResultsList from "./components/ResultsList";
import SingleHeroePage from "./components/SingleHeroePage";
import PrivateRoute from "./routers/PrivateRoute";

const App = () => {
  const user = sessionStorage.getItem("token");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/Login" component={Formulario}>
          {user && <Redirect to="/Home" />}
        </Route>
        <PrivateRoute exact path="/Home" component={Home} />
        <PrivateRoute exact path="/Result" component={ResultsList} />
        <PrivateRoute path="/Heroe/id/:id" component={SingleHeroePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
