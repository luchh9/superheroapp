import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./Singleheroe.css";
import { useParams } from "react-router-dom";

function SingleHeroePage() {
  //PARAMS
  let params = useParams();
  let heroeid = params.id;

  //STATE
  const [infoheroe, setInfoheroe] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //FETCH
    setLoading(true);
    const fetchData = async (id) => {
      try {
        const response = await axios(
          "https://www.superheroapi.com/api.php/4506791626076279/" + id
        );
        console.log("Response:", response.data);
        setInfoheroe(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData(heroeid);
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {loading && <Loading />}

      <div className="single-heroe">
        <div className="info_section">
          <div className="heroe_header">
            <img
              className="heroe-image"
              src={infoheroe.image?.url}
              alt="Heroe"
            />
            <h1>{infoheroe.name}</h1>
            <h4>{infoheroe.biography?.["full-name"]}</h4>
            <div className="appearance">
              <span>{infoheroe.appearance?.gender}</span>
              <span>{infoheroe.appearance?.height[1]}</span>
              <span>{infoheroe.appearance?.weight[1]}</span>
            </div>
          </div>
          <div className="container-list">
            <ul className="heroe-list">
              <li>Eye color: {infoheroe.appearance?.["eye-color"]}</li>
              <li>Hair color: {infoheroe.appearance?.["hair-color"]}</li>
              <li>Work: {infoheroe.work?.occupation}</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="blur_back heroeimg"
            src={infoheroe.image?.url}
            alt="Heroe"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default SingleHeroePage;
