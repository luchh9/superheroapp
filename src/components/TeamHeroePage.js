import React, { useState } from "react";
import HeroeCard from "./HeroeCard";

const TeamHeroePage = () => {
  let arrayheroes = JSON.parse(localStorage.getItem("heroes"));

  const [heroeteam, setHeroeTeam] = useState(arrayheroes);

  const deleteHeroe = (idheroe) => {
    //Obtengo el array de LocalStorage
    let arrayHeroes = JSON.parse(localStorage.getItem("heroes"));
    //Elimino el heroe por ID
    for (var i = 0; i < arrayHeroes.length; i++) {
      if (arrayHeroes[i].id === idheroe) {
        arrayHeroes.splice(i, 1);
        i--;
      }
    }
    //Guardo el array en localStorage
    localStorage.setItem("heroes", JSON.stringify(arrayHeroes));
    //Actualizo el estado
    setHeroeTeam(arrayHeroes);
  };

  return (
    <React.Fragment>
      <div className="container centrado team-title">
        <div className="centrar">
          <h1>TEAM</h1>
          <p>
            El team tiene un maximo de 6 integrantes y no se puede agregar al
            mismo heroe!
          </p>
          <div className="team-stats">
            <li>
              strength:
              {heroeteam.map((heroe) => (
                <li>{heroe.powerstats.strength}</li>
              ))}
            </li>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {heroeteam.map((e) => (
            <HeroeCard
              name={e.name}
              img={e.image}
              id={e.id}
              key={e.id}
              stored={e.stored}
              delete={deleteHeroe}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamHeroePage;
