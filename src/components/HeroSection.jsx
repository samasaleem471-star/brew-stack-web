import { Container, Button } from "react-bootstrap";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section id="home" className="hero d-flex align-items-center">
      <Container>
        <h1 className="hero-title">Where Every Sip Tells a Story</h1>

        <p className="hero-text">
          Freshly roasted coffee made with love. Come in, relax, and enjoy
          your favorite brew.
        </p>

        <Button className="hero-btn me-3">Explore Menu</Button>
        <Button variant="outline-light">Our Story</Button>
      </Container>
    </section>
  );
}

export default HeroSection;