import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroeCard from "./HeroeCard";
import Loading from "./Loading";
import NotFound from "./NotFound";

// import axios from "axios";

function ResultsList(props) {
  //LOCATION
  let location = useLocation();
  const heroe = location.search.replace("?", "");
  console.log("Location:", heroe);

  //STATE
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);

  //SIN AXIOS
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://www.superheroapi.com/api.php/4506791626076279/search/" + heroe
    )
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        console.log("response!", heroes.error);
      });
  }, []);

  return (
    <React.Fragment>
      {loading && <Loading />}
      {heroes.error && <NotFound msg={heroes.error} />}

      <div>
        <div className="container-card">
          <h1 className="display-4 results-for text-uppercase">
            {heroes["results-for"]}
          </h1>
          <div className="container">
            <div className="row">
              {heroes.results?.map((e) => (
                <HeroeCard name={e.name} img={e.image.url} id={e.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResultsList;
