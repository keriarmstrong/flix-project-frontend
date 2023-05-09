import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;


export default function ShowDetails() {
  const [show, setShow] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/shows/${id}`)
    .then((response) => {
      setShow(response.data);
    })
    .catch((error) => {
      console.warn('catch', error);
    })
  }, [id]);
  
  return (
    <div>
      <h3>{show.title}</h3>
    </div>
  )
}
