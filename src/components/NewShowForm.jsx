import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

export default function NewShowForm() {
  const navigate = useNavigate();

  const addShow = (newShow) => {
    axios
      .post(`${API}/shows`, newShow)
      .then(
        () => {
          navigate(`/shows`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [show, setShow] = useState({
    title: "",
    year: 0,
    tv_rating: "",
    num_episodes: 0,
    num_seasons: 0,
    actors: "",
    star_rating: "",
    genre: "",
    is_favorite: false,
  });

  // const [value, setValue] = useState("")

  // const handleNumberChange = (e) => {
  //   setValue(e.target.value)
  // }

  const handleTextChange = (e) => {
    setShow({ ...show, [e.target.id]: e.target.value });
  };
  const handleCheckboxChange = () => {
    setShow({ ...show, is_favorite: !show.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addShow(show);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-md-10"
          style={{
            background: "lightgrey",
            borderRadius: "10px",
            marginBottom: "6em",
          }}
        >
          <div className="newFormContainer p-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title" className="mb-3">
                <Row>
                  <Form.Label className="title" column sm="3">
                    Title
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      id="title"
                      value={show.title}
                      type="text"
                      onChange={handleTextChange}
                      placeholder="Enter show title"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="year" className="mb-3">
                <Row>
                  <Form.Label className="year" column sm="3" >
                    Year
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      id="year"
                      value={show.year}
                      type="number"
                      onChange={handleTextChange}
                      placeholder="Enter Year Aired"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="tvRating" className="mb-3">
                <Row>
                  <Form.Label className="tvRating" column sm="3">
                    TV Rating
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      id="tv_rating"
                      value={show.tv_rating}
                      type="text"
                      onChange={handleTextChange}
                      placeholder="Enter Rating"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="numOfEpisodes" className="mb-3">
                <Row>
                  <Form.Label className="numOfEpisodes" column sm="3">
                    Number of Episodes
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      id="num_episodes"
                      value={show.num_episodes}
                      type="number"
                      onChange={handleTextChange}
                      placeholder="Enter the Number of Episodes"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="numOfSeasons" className="mb-3">
                <Row className="justify-content-between">
                  <Form.Label className="numOfSeasons" column sm="3">
                    Number of Seasons
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      id="num_seasons"
                      value={show.num_seasons}
                      type="number"
                      onChange={handleTextChange}
                      placeholder="Enter Number of Seasons"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="actors" className="mb-3">
                <Row>
                  <Form.Label className="actors" column sm="3">
                    Actors
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      id="actors"
                      value={show.actors}
                      type="text"
                      onChange={handleTextChange}
                      placeholder="Enter Actors"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="starRating" className="mb-3">
                <Row>
                  <Form.Label className="starRating" column sm="3">
                    Star Rating
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      id="star_rating"
                      value={show.star_rating}
                      type="number"
                      min="0"
                      max="5"
                      step="1"
                      onChange={handleTextChange}
                      placeholder="Enter Rating"
                    />
                  </Col>
                </Row>
              </Form.Group>
              {/*  DROPDOWN */}
              <Form.Group controlId="genre" className="mb-3">
                <Row>
                  <Form.Label className="genre" column sm="3">
                    Genre
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      id="genre"
                      value={show.genre}
                      type="text"
                      onChange={handleTextChange}
                      placeholder="Enter genre"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="favorite" className="mb-3">
                <Row>
                  <Form.Label className="favorite" column sm="3">
                    Favorite
                  </Form.Label>
                  <Col sm="9">
                    <Form.Check
                      id="favorite"
                      value={show.is_favorite}
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      checked={show.is_favorite}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <br />
              <Button type="submit">Submit</Button>{" "}
              <Link to={`/shows`}>
                <Button className="ml-2" style={{ marginLeft: "10px" }}>
                  Back
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
