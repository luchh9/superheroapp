import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
//Pongo en uso un Custom Hook para guardar en LocalStorage
import useLocalStorage from "../hooks/useLocalStorage";

function HeroeCard(props) {
  const [team, setTeam] = useLocalStorage("heroes", "");

  function saveHeroe(idheroe, nameheroe, imgheroe, powerstats) {
    let teamHeroes = localStorage.getItem("heroes");
    let arrayHeroes = JSON.parse(teamHeroes);

    let heroeObj = {
      id: idheroe,
      name: nameheroe,
      image: imgheroe,
      powerstats: powerstats,
      stored: true,
    };

    arrayHeroes.push(heroeObj);
    setTeam(arrayHeroes);
  }

  return (
    <React.Fragment>
      <div className="col-12 col-md-3 ">
        <div className="heroe-card">
          <Link className="Link" to={`/Heroe/id/${props.id}`}>
            <img className="heroe-card-img" src={props.img} alt="Heroe" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            {props.stored ? null : (
              <button
                onClick={() =>
                  saveHeroe(props.id, props.name, props.img, props.powerstats)
                }
                className="btn btn-dark"
              >
                Agregar
              </button>
            )}

            {props.stored ? (
              <button
                onClick={() => props.delete(props.id)}
                className="btn btn-dark"
              >
                Eliminar
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default HeroeCard;
