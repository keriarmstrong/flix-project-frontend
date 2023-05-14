import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import placeholder from "../assets/show-placeholder.png"

const API = process.env.REACT_APP_API_URL;

export default function ShowDetails() {
  const [show, setShow] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.warn('catch', error);
      })
  }, [id]);

  const deleteShow = () => {
    axios
      .delete(`${API}/shows/${id}`)
      .then((response) => {
        navigate(`/shows`);
      },
        (error) => console.error(error))
      .catch((c) => console.warn(c))
  }

  const handleDelete = () => {
    deleteShow();
  }

  return (
    <div>

      <h3>{show.title}</h3>
      <div class="container">
        
        <div class="row">
          <img class="card-image-top col-4" src={placeholder} alt="show_thumbnail" />
          <div class="col-6 offset-1">
          <div class=" border border-primary border-2">
            <table class="table" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>Year:</td>
                  <td>{show.year}</td>
                </tr>
                <tr>
                  <td>Genre:</td >
                  <td> {show.genre}</td>
                </tr>
                <tr>
                  <td>Tv Rating:</td >
                  <td> {show.tv_rating}</td>
                </tr>
                <tr>
                  <td>Rating: </td >
                  <td>{show.star_rating}</td>
                </tr>
                <tr>
                  <td>Number of Seasons: </td >
                  <td>{show.num_seasons}</td>
                </tr>
                <tr>
                  <td>Number of Episodes: </td >
                  <td>{show.num_episodes}</td>
                </tr>
                <tr>
                  <td>Actors: </td >
                  <td>{show.actors}</td>
                </tr>
                <tr>
                  <td>Favorite: </td >
                  <td>{show.is_favorite ? <span>⭐️</span> : <span>❌</span>}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-2 offset-5">
          <Link to={`/shows`}><button class="btn btn-outline-primary btn-sm">Back ⬅</button></Link>
        </div>
        <div class="col-2">
          <Link to={`/shows/${id}/edit`}><button class="btn btn-outline-primary btn-sm">Edit ✏️</button></Link>
        </div>


        <div class="col-2">
          <button class="btn btn-outline-primary btn-sm"   onClick={handleDelete}>Delete ❌</button>
        </div>
      </div>


    </div>

  )
}
