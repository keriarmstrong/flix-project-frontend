import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
    <button>
      <Link to='/shows'>Shows</Link>
    </button>
    <button>
      <Link to='/shows/new'>New Show</Link>
    </button>
    </div>
  )
}
