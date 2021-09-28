import React from "react";
import "./Pokemon.css";

class Pokemon extends React.Component {
  state = {
    loading: false,
    error: null,
    data: {
      abilities: [{ ability: { name: "" } }],
      name: "",
      height: "",
      sprites: {
        other: {
          "official-artwork": { front_default: "" },
        },
      },
      stats: [
        {
          base_stat: "",
          stat: {
            name: "",
          },
        },
      ],
      types: [
        {
          type: {
            name: "",
          },
        },
      ],
      weight: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
    });
    let pokemon = "scyther";
    let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) {
      //conocer la estructura del mensaje error de POKEAPI para aplicar (datamessage no es)
      this.setState({
        loading: false,
        error: true,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
    console.log(data, "lo que trae la api");
    data.types.map((e) => {
      console.log(e.type.name);
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="pokeconteiner centrado">
          <h1 className="titulo">{this.state.data.name} </h1>
          {this.state.error && <h1>error</h1>}
          {this.state.loading && <h1>cargando</h1>}
          <div className="principal">
            <img
              className="pic"
              src={
                this.state.data.sprites.other["official-artwork"].front_default
              }
              alt=""
            />
            <div className="tipo">
              <ul className="list">
                <h3>Tipo:</h3>
                {this.state.data.types.map((e) => {
                  {
                    return <li className={e.type.name}>{e.type.name}</li>;
                  }
                })}
                <h3>Habilidades:</h3>
                {this.state.data.abilities.map((e) => {
                  {
                    return <li className="habilidades">{e.ability.name}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div className="informacion">
            <div className="primerdiv">
              <h1>informacion </h1>
              <p>altura: {this.state.data.height}</p>
              <p>peso:{this.state.data.weight}</p>
            </div>
            <div className="stats list">
              {this.state.data.stats.map((e) => {
                {
                  return (
                    <li>
                      {e.stat.name}: {e.base_stat}
                    </li>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pokemon;
