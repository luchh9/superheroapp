import React, { useState } from "react";
import "../assets/css/HeroeCard.css";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import addIcon from "../assets/statics/add-icon.png";
import deleteIcon from "../assets/statics/delete-icon.png";

function HeroeCard(props) {
  const [team, setTeam] = useLocalStorage("heroes", "");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  function saveHeroe(idheroe, nameheroe, imgheroe, powerstats) {
    let teamHeroes = localStorage.getItem("heroes");
    let arrayHeroes = JSON.parse(teamHeroes);

    //Retorna true o false, si existe el id en el array
    let exist = (array, id) => {
      let existe = array.some((e) => e.id === id);
      return existe;
    };

    let IsDuplicate = exist(arrayHeroes, idheroe);

    //Manejo el estado de "error"
    if (arrayHeroes.length > 5) {
      setError("El team esta completo!");
      setTimeout(() => setError(), 2000);
    } else if (IsDuplicate) {
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
      //msg exito
      setExito("Agregado con exito");
      setTimeout(() => setExito(), 2000);
    }
  }

  return (
    <React.Fragment>
      <div className="col-12 col-md-4 ">
        <div className="heroe-card-container">
          <h5 className="card-title">{props.name}</h5>
          <Link className="Link" to={`/Heroe/id/${props.id}`}>
            <div className="container-img">
              <img className="heroe-card-img" src={props.img} alt="Heroe" />
            </div>
          </Link>
          <div className="card-body">
            {props.stored ? null : (
              <button
                onClick={() =>
                  saveHeroe(props.id, props.name, props.img, props.powerstats)
                }
              >
                <img className="icon" src={addIcon} alt="" />
              </button>
            )}

            {props.stored ? (
              <button onClick={() => props.delete(props.id)}>
                <img className="icon" src={deleteIcon} alt="" />
              </button>
            ) : null}

            {error ? <h5 className="error">{error}</h5> : null}
            {exito ? <h5 className="exito">{exito}</h5> : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default HeroeCard;
