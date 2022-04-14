import React, { useState } from "react";
import HeroeCard from "./HeroeCard";

const TeamHeroePage = () => {
  let arrayheroes = JSON.parse(localStorage.getItem("heroes"));

  const [heroeteam, setHeroeTeam] = useState(arrayheroes);

  //devuelve la suma de la fuerza de todos los heroes
  const sumStrength = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      let strength = array[i].powerstats.strength;
      let numstrength = parseInt(strength, 10);
      total += numstrength;
    }
    return total;
  };

  const sumSpeed = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      let strength = array[i].powerstats.speed;
      let numspeed = parseInt(strength, 10);
      total += numspeed;
    }
    return total;
  };

  const totalSpeed = sumSpeed(heroeteam);
  const totalStrength = sumStrength(heroeteam);

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
        </div>
      </div>
      {heroeteam.length === 0 ? null : (
        <div>
          <h3>Team Stats</h3>
          <ul className="power-list">
            <li className="powerstat">
              Fuerza:
              {totalStrength}
            </li>
            <li className="powerstat">
              Velocidad:
              {isNaN(totalSpeed) ? "unknow" : totalSpeed}
            </li>
          </ul>
        </div>
      )}

      {heroeteam.length === 0 ? (
        <h3>Team vacio!</h3>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default TeamHeroePage;
