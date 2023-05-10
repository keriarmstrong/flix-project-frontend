import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

export default function NewShowForm() {
  const navigate = useNavigate();

  const addShow = (newShow) => {
    axios
    .post(`${API}/shows`, newShow)
    .then( () => {
      navigate(`/shows`);
    },
    (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c))
  }

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

  // const [value, setValue] = useState("")

  // const handleNumberChange = (e) => {
  //   setValue(e.target.value)
  // }

  const handleTextChange = (e) => {
    setShow({...show, [e.target.id]: e.target.value});
  }
  const handleCheckboxChange = () => {
    setShow({...show, is_favorite: !show.is_favorite});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addShow(show);
  }

  return (
    <div className='newFormContainer'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
          id="title"
          value={show.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter show title"
          required
        />
        <label htmlFor="year">Year</label>
        <input 
        id="year"
        value={show.year}
        type="number"
        onChange={handleTextChange}
        placeholder="Enter Year Aired"
        required
        />
        <label htmlFor="tvRating">TV Rating</label>
        <input 
        id="tv_rating"
        value={show.tv_rating}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter Rating"
        />
        <label htmlFor="numOfEpisodes" >Number of Episodes</label>
        <input 
        id="num_episodes"
        value={show.num_episodes}
        type="number"
        onChange={handleTextChange}
        placeholder="Enter the Number of Episodes"
        />
        <label htmlFor="numOfSeasons">Number of Seasons</label>
        <input 
        id="num_seasons"
        value={show.num_seasons}
        type="number"
        onChange={handleTextChange}
        placeholder="Enter Number of Seasons"
        />
        <label htmlFor="actors">Actors</label>
        <input 
        id="actors"
        value={show.actors}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter Actors"
        />
        <label htmlFor="starRating">Star Rating</label>
        <input 
        id="star_rating"
        value={show.star_rating}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter Rating"
        />
         {/*  DROPDOWN */}
         <label htmlFor="genre">Genre</label>
        <input 
        id="genre"
        value={show.genre}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter genre"
        />
        <label htmlFor="favorite">Favorite</label>
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
    </div>
  )
}
