import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaCoffee } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" className="header">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <FaCoffee className="header-icon" /> BrewStack
        </Navbar.Brand>

        {/* Hamburger button for mobile */}
        <Navbar.Toggle aria-controls="menu" />

        <Navbar.Collapse id="menu">
          {/* Links */}
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Button */}
          <Button className="order-btn">Order Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;