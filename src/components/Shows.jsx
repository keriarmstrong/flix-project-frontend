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
      <section>
        <div class="row">
        <h3 class="col-2">Browse Shows</h3>
        </div>
        <table class="table table-striped table-hover table-sm offset-1"  style={{width: "85%"}}>
          <thead>
            <tr>
            <th>Title</th>
            <th>Year</th>
            <th>TV Rating</th>
            <th>Rating</th>
            <th>Genre</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {shows.map((show) => {
              return <Show key={show.id} show={show} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
