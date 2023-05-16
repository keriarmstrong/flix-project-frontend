import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Show from "./Show";

const API = process.env.REACT_APP_API_URL;

export default function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/shows`)
      .then((response) => setShows(response.data))
      .catch((error) => console.warn("catch", error));
  }, []);
  return (

    <div class="container-fluid">
      <div class="row">
        <div></div>
      </div>
      <div class="row gy-4">
        
        {shows.map((show) => {
          return <div class="col">
            <Show key={show.id} show={show} />
          </div>
        })}

      </div>
    </div>
  );
}
