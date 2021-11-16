import React from "react";

function SingleHeroePage(props) {
  const heroename = props.match.params.name;
  return (
    <React.Fragment>
      <h1>hola</h1>
      <h3>{heroename}</h3>
    </React.Fragment>
  );
}
export default SingleHeroePage;
