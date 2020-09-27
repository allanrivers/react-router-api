import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Api.css'

function Api() {

  // State for the fetched api data
  const [apiData, setApiData] = useState([""]);


  // Call the useEffect for the api call
  useEffect(() => {
    fetchApi();
  }, []);


  // Call the api and set it to the state
  const fetchApi = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    const jsData = await data.json();
    const results = jsData.results;
    console.log(results);
    setApiData(results);
  };


  return (
    <div>
      <ul className="resultApiCall">
      {apiData !== [""] ? apiData.map((data) => (
        <Link to={`/about/${data.name}`}>
          <li key={data.url}>{data.name}</li>
        </Link>    
          )) : ""}
      </ul>
      <h1>Api call</h1>
    </div>
  );
}

export default Api;
