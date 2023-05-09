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
        <table>
          <thead>
            <tr>
            <th>Browse Shows</th>
            </tr>
          </thead>
          <tbody>
            {shows.map((show) => {
              return <Show key={show.id} show={show} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
