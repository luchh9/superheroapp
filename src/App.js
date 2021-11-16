import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Formulario from "./components/Formulario";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultsList from "./components/ResultsList";
import SingleHeroePage from "./SingleHeroePage";
import Loading from "./components/Loading";
const App = () => {
  const user = sessionStorage.getItem("token");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={Formulario}>
          {user && <Redirect to="/Home" />}
        </Route>
        <Route
          exact
          path="/Home"
          render={() => {
            return user ? <Home /> : <Redirect to="/Login" />;
          }}
        />
        <Route exact path="/Result" component={ResultsList} />
        <Route path="/Heroe/name/:name" component={SingleHeroePage} />
        <Route path="/Loading" component={Loading} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
