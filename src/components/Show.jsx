import React from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/starIcon.png'
import indexPlaceholder from "../assets/index-placeholder.png"
import BingeWorthy from './BingeWorthy';
import RatingBreakdown from './RatingBreakdown';

export default function Show({ show }) {
  // console.log(show)
  return (


    <div class="container" >
      <Link to={`/shows/${show.id}`}>
        <div class="card" style={{ width: "350px", height: "auto" }} >
          <div class="border border-2 p-1">
            <img class="img" style={{width: "100%", height: "250px"}} src={indexPlaceholder} alt="placeholder" />
            <div class="card-body">
              <h4 class="card-title">{show.title}</h4>
              <span><p class="card-subtitle">{show.year} {"  "}{show.tv_rating}</p></span>
              <p class="card-subtitle">{show.genre}</p>
              <div class="row">
                <div class="col-6">
                  <span>{show.star_rating} <RatingBreakdown rating={show.star_rating} /></span>
                  </div>
                  <div class="col-2 offset-1">
                  <BingeWorthy show={show} />
                </div>
                <div class="col-2">
                  {show.star_rating === "5" ? <img style={{ width: "10%" }} src={star} alt="5 stars" className='starIcon' /> : null}
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div>
        
      </div>
    </div>
  )
}


