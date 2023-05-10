import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
      <p>Year: {show.year}</p>
      <p>Genre: {show.genre}</p>
      <p>Tv Rating: {show.tv_rating}</p>
      <p> Rating: {show.star_rating}</p>
      <p> Number of Seasons: {show.num_seasons}</p>
      <p> Number of Episodes: {show.num_episodes}</p>
      <p> Actors: {show.actors}</p>
      <p> Favorite: {show.is_favorite ? <span>⭐️</span> : <span>❌</span>}</p>
      <div>
        <Link to={`/shows`}><button>Back</button></Link>
        <Link to={`/shows/${id}/edit`}><button>Edit</button></Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
      

    </div>
    
  )
}
