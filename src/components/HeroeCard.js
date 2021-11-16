import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function HeroeCard(props) {
  return (
    <React.Fragment>
      <div className="col-12 col-md-3 ">
        <Link className="Link" to={`/Heroe/name/${props.name}`}>
          <div class="heroe-card">
            <img className="heroe-card-img" src={props.img} alt="Heroe Image" />
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}
export default HeroeCard;
