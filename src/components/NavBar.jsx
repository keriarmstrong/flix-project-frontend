import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="1g" bg="black" variant="light" style={{ width: '100%', position: 'relative' }}>
      <Container>
        <Navbar.Brand>
          <div class="row">
            <div class="col-1">
              <Link to="/" style={{ textDecoration: 'none' }}>
                {" "}
                <h1>Flix</h1>
              </Link>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Nav id="navbar-nav">
        <Nav className="mr-auto">
          <div class="container">
            <div class="row row-col-2 ">
              <div class="col">
                <Link to="/shows">
                  <button class="btn btn-outline-primary">Shows</button>
                </Link>
              </div>

              <div class="col">
                <Link to="/shows/new">
                <button className="btn btn-outline-primary button-no-wrap" style={{ whiteSpace: 'nowrap' }}>New Show</button>

                </Link>
              </div>
            </div>
          </div>
        </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}
