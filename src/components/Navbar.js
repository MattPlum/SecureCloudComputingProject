import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
    return (
    <Navbar bg="light" expand="sm">
        <Navbar.Brand as={Link} to="/login">
          Login
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/signup">
            Signup
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/forgot-password">
            Forgot Password
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/folders">
            Folders
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
    </Navbar>
    )
    
}
