import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div class="container">
        <div class="row">
          <div class="col-1">
           <Link to="/"> <h1>Flix</h1></Link>
          </div>
        </div>

        <div class="row row-col-2 ">
          <div class="col">
          <Link to='/shows'> 
          <button class="btn btn-outline-primary">
              Shows
            </button>
            </Link>
          </div>


          <div class="col">
          <Link to='/shows/new'> 
          <button class="btn btn-outline-primary">
              New Show
            </button>
            </Link>
          </div>

        </div>
      </div>
    </nav >
  )
} 
