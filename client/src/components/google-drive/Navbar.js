import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
    return (
    <Navbar data-testid="navbar-1" bg="light" expand="sm">
        <Navbar.Brand as={Link} to="/">
          WDS Drive
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/user">
           <label for='profile-input' >Profile</label>
          </Nav.Link>
        </Nav>
    </Navbar>
    )
    
}
