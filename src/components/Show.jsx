import React from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/starIcon.png'
import indexPlaceholder from "../assets/index-placeholder.png"
import BingeWorthy from './BingeWorthy';

export default function Show({ show }) {
  // console.log(show)
  return (
    <div class="col-1">

      <div class="container" >
        <Link to={`/shows/${show.id}`}>
          <div class="card" style={{ width: "250px", height: "auto" }} >
            <div class="border border-2 p-0.5">
              <img class="img-fluid" src={indexPlaceholder} alt="placeholder" />
              <div class="card-body">
                <h4 class="card-title">{show.title}</h4>
                <span><p class="card-subtitle">{show.year} {"  "}{show.tv_rating}</p></span>
                <p class="card-subtitle">{show.genre}</p>
                <span>{show.rating}
                  {show.star_rating === "5" ? <img style={{ width: "20%" }} src={star} alt="5 stars" className='starIcon' /> : null}
                  <BingeWorthy show={show} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>


    </div>

  )
}


{/* <tr>
        <td>
          <Link to={`/shows/${show.id}`}>{show.title}</Link>
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
      </tr> */}

