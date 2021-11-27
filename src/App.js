import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ResultsList from "./components/ResultsList";
import SingleHeroePage from "./components/SingleHeroePage";
import PrivateRoute from "./routers/PrivateRoute";
import Layout from "./components/Layout";

const App = () => {
  const user = sessionStorage.getItem("token");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/Login" component={Login}>
          {user && <Redirect to="/Home" />}
        </Route>
        <Layout>
          <PrivateRoute exact path="/Home" component={Home} />
          <PrivateRoute exact path="/Result" component={ResultsList} />
          <PrivateRoute path="/Heroe/id/:id" component={SingleHeroePage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
