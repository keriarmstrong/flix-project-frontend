import React from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/starIcon.png'
import BingeWorthy from './BingeWorthy';

export default function Show({ show }) {
  // console.log(show)
  return (
    
      <tr>
        <td>
          <Link to={`/shows/${show.id}`} style={{ textDecoration: 'none' }}>{show.title}</Link>
        </td>
        <td>
          {show.year}
        </td>
        <td>
          {show.tv_rating}
        </td>
        <td>
          {show.star_rating}
        </td>
        <td>
          {show.genre}
        </td>
        <td>
          {show.star_rating === "5" ? <img src={star} alt="5 stars" className='starIcon' /> : null}

        </td>
        <td>
          <BingeWorthy show={show} />
        </td>
      </tr>
  
  )
}
