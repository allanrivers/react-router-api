import React, { useState, useEffect } from "react";

function About({ match }) {
  const [fetchItems, setFetchItem] = useState([""]);

  useEffect(() => {
    fetchItem();
}, []);

const fetchItem = async () => {
    const item = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
        );
        const fetchedData = await item.json();
        console.log(fetchedData);
        setFetchItem(fetchedData);
  };

  return (
    <div>
      {fetchItems !== [""] ? (
        <div>
          <h1>{fetchItems.name}</h1>
        </div>

      ) : (
        ""
      )}
    </div>
  );
}

export default About;
