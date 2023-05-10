import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>Flix</h1>
    <button>
      <Link to='/shows'>Shows</Link>
    </button>
    <button>
      <Link to='/shows/new'>New Show</Link>
    </button>
    </nav>
  )
} 
