import React from "react";
import NavBar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
class PageHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Pokemon />
      </React.Fragment>
    );
  }
}
export default PageHome;
