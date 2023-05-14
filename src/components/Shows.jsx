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
    
    <div className="shows">
      <div class="row row-col-3 g-2">
      {shows.map((show) => {
      return <div class="col-3 ">
       
        <Show key={show.id} show={show} />
       
        </div>
    })}
      </div>
    </div>
  );
}
