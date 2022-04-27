import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { Stack } from "react-bootstrap";

function Home() {
   //Good place for the Navbar
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/products" className="nav-link">Products</Link>
          </Nav>
        </Container>
      </Navbar>

            <Stack gap={3} className="col-md-10 mx-auto">
        <Outlet />
      </Stack>
   
        </>
    )
}

export default Home