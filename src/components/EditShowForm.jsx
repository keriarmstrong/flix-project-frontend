import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

export default function EditShowForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [show, setShow] = useState({
    title: "",
    year: 0,
    tv_rating: "",
    num_episodes: 0,
    num_seasons: 0,
    actors: "",
    star_rating: "",
    genre: "",
    is_favorite: false
  })

  const updateShow = (updatedShow) => {
    axios.put(`${API}/shows/${id}`, updatedShow)
    .then(() => {
      navigate(`/shows/${id}`);
    },
    (error) => console.error(error))
    .catch((c) => console.warn('catch', c)); 
  };

  const handleTextChange = (e) => {
    setShow({...show, [e.target.id] : e.target.value});
  };

  const handleCheckboxChange = () => {
    setShow({...show, is_favorite : !show.is_favorite});
  };

  useEffect(() => {
    axios.get(`${API}/shows/${id}`)
    .then((response) => setShow(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateShow(show, id);
  }



  return (
    <div className='editFormContainer'>
    <form onSubmit={handleSubmit}>
        <label className="title">Title</label>
        <input 
          id="title"
          value={show.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter show title"
          required
        />
        <label className="year">Year</label>
        <input 
        id="year"
        value={show.year}
        type="number"
        onChange={handleTextChange}
        placeholder="Enter Year Aired"
        required
        />
        <label className="tvRating">TV Rating</label>
        <input 
        id="tv_rating"
        value={show.tv_rating}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter Rating"
        />
        <label className="numOfEpisodes" >Number of Episodes</label>
        <input 
        id="num_episodes"
        value={show.num_episodes}
        type="number"
        onChange={handleTextChange}
        placeholder="Enter the Number of Episodes"
        />
        <label className="numOfSeasons">Number of Seasons</label>
        <input 
        id="num_seasons"
        value={show.num_seasons}
        type="number"
        onChange={handleTextChange}
        placeholder="Enter Number of Seasons"
        />
        <label className="actors">Actors</label>
        <input 
        id="actors"
        value={show.actors}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter Actors"
        />
        <label className="starRating">Star Rating</label>
        <input 
        id="star_rating"
        value={show.star_rating}
        type="number"
        min="0"
        max="5"
        step="1"
        onChange={handleTextChange}
        placeholder="Enter Rating"
        />
         {/*  DROPDOWN */}
         <label className="genre">Genre</label>
        <input 
        id="genre"
        value={show.genre}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter genre"
        />
        <label className="favorite">Favorite</label>
        <input 
        id="favorite"
        value={show.is_favorite}
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={show.is_favorite}
        />
        <br />
        <input 
        type="submit"
        />
      </form>
      <Link to={`/shows/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  )
}
