import React, { useState, useEffect } from "react";
import HeroeCard from "./HeroeCard";
import Loading from "./Loading";
import axios from "axios";

const ResultsList = (props) => {
  const heroe = props.history.location.search.replace("?", "");
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchData = async (name) => {
  //     try {
  //       const response = await axios(
  //         "https://www.superheroapi.com/api.php/4506791626076279/search/" + name
  //       );
  //       console.log("la respuesta", response);
  //       setHeroes(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData(heroe);
  //   setLoading(false);
  // }, []);

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
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div className="container-card">
        <h1 className="display-4 results-for text-uppercase">
          {heroes["results-for"]}
        </h1>
        <div className="container">
          <div className="row">
            {heroes.results?.map((e) => (
              <HeroeCard name={e.name} img={e.image.url} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResultsList;
