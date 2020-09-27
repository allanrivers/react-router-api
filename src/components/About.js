import React, { useState, useEffect } from "react";
import "../css/About.css";

function About({ match }) {
  const [fetchItems, setFetchItem] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const item = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
    );
    const fetchedData = await item.json();
    let calcWeight = fetchedData.weight / 4.5;
    setWeight(calcWeight.toFixed(2));
    console.log(fetchedData);
    setFetchItem(fetchedData);
  };

  return (
    <div className="fetch-individual">
      {/* If fetch items has been rendered correctly then add to the UI */}
      {fetchItems !== "" ? (
        <div
          className="poke-card"
          style={{
            backgroundColor:
              fetchItems.types[0].type.name === "fire"
                ? "#F08030"
                : fetchItems.types[0].type.name === "grass"
                ? "#78C850"
                : fetchItems.types[0].type.name === "water"
                ? "blue"
                : fetchItems.types[0].type.name === "normal"
                ? "#A8A878"
                : fetchItems.types[0].type.name === "flying"
                ? "#A890F0"
                : fetchItems.types[0].type.name === "electric"
                ? "#F8D030"
                : fetchItems.types[0].type.name === "poison"
                ? "#A040A0"
                : fetchItems.types[0].type.name === "psychic"
                ? "#F85888"
                : fetchItems.types[0].type.name === "ground"
                ? "#E0C068"
                : fetchItems.types[0].type.name === "fighting"
                ? "#C03028"
                : fetchItems.types[0].type.name === "bug"
                ? "#A8B820"
                : fetchItems.types[0].type.name === "ghost"
                ? "#705898"
                : fetchItems.types[0].type.name === "rock"
                ? "#B8A038"
                : fetchItems.types[0].type.name === "steel"
                ? "#B8B8DO"
                : fetchItems.types[0].type.name === "ice"
                ? "#98D8D8"
                : fetchItems.types[0].type.name === "dragon"
                ? "#7038F8"
                : fetchItems.types[0].type.name === "dark"
                ? "#705848"
                : fetchItems.types[0].type.name === "fairy"
                ? "#EE99AC"
                : "",
            color:
              fetchItems.types[0].type.name === "water"
                ? "rgba(255, 255, 255, 0.8)"
                : "",
          }}
        >
          <div className="top-card">
            <h1>{fetchItems.name}</h1>
            <h2>{fetchItems.stats[0].base_stat} HP</h2>
          </div>
          <div className="img-box">
            <img
              className="poke-image"
              src={fetchItems.sprites.front_default}
              alt="Image"
            />
          </div>
          <div className="poke-stats">
            <h2>NO {fetchItems.id}</h2>
            <h2>HT: {fetchItems.height}</h2>
            <h2>WT: {weight} lbs.</h2>
          </div>

          <div className="bottom-card">
            <h2 className="poke-moves">{fetchItems.moves[0].move.name}</h2>
            <h4>Lorem ipsum dolor sit.</h4>
            <div className="black-underline"></div>
            <h2 className="poke-moves">{fetchItems.moves[1].move.name}</h2>
            <h4>Lorem ipsum dolor sit.</h4>
          </div>
          <div className="black-underline"></div>
          <div className="poke-credits">
            <h6>Illus. Allan Rivers</h6>
            <h6>
              &copy; 1995, 96, 98 Nintendo, Creatures, GAMEFREAK. &copy;1999
              Wizards.{" "}
            </h6>
            <h6>*</h6>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default About;
