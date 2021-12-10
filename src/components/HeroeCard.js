import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
//Pongo en uso un Custom Hook para guardar en LocalStorage
import useLocalStorage from "../hooks/useLocalStorage";

function HeroeCard(props) {
  const [team, setTeam] = useLocalStorage("heroes", "");
  const [error, setError] = useState();

  function saveHeroe(idheroe, nameheroe, imgheroe, powerstats) {
    let teamHeroes = localStorage.getItem("heroes");
    let arrayHeroes = JSON.parse(teamHeroes);

    //fix
    //Retorna true o false, si existe el id en el array
    let exist = (array, id) => {
      let existe = array.some((e) => e.id === id);
      return existe;
    };
    let duplicate = exist(arrayHeroes, idheroe);

    //Manejo el estado de "error"
    if (arrayHeroes.length > 5) {
      setError("El team esta completo!");
      setTimeout(() => setError(), 2000);
    } else if (duplicate) {
      setError("El heroe ya esta en el equipo!");
      setTimeout(() => setError(), 2000);
    } else {
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
  }

  return (
    <React.Fragment>
      <div className="col-12 col-md-3 ">
        <div className="heroe-card">
          <Link className="Link" to={`/Heroe/id/${props.id}`}>
            <div className="container-img">
              <img className="heroe-card-img" src={props.img} alt="Heroe" />
            </div>
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
            <h5 className="error">{error}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default HeroeCard;
