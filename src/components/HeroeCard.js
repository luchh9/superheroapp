import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function HeroeCard(props) {
  return (
    <React.Fragment>
      <div className="col-12 col-md-3 ">
        <Link className="Link" to={`/Heroe/id/${props.id}`}>
          <div className="heroe-card">
            <img className="heroe-card-img" src={props.img} alt="Heroe" />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}
export default HeroeCard;
