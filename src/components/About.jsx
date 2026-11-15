import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left side: image */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
              alt="Coffee being poured in a cafe"
              className="about-img img-fluid"
            />
          </Col>

          {/* Right side: text */}
          <Col xs={12} md={6}>
            <h2 className="about-heading">Our Story</h2>

            <p className="about-text">
              BrewStack started with a simple idea: great coffee should feel
              like home. We source our beans from small farms and roast them
              fresh every morning in our own shop.
            </p>

            <p className="about-text">
              Whether you stop by for a quick espresso or stay all afternoon
              with a book, we want every cup to be worth the visit.
            </p>

            {/* Small facts row */}
            <Row className="about-facts text-center mb-4">
              <Col xs={4}>
                <h3 className="about-number">8+</h3>
                <p className="about-label">Years open</p>
              </Col>
              <Col xs={4}>
                <h3 className="about-number">25</h3>
                <p className="about-label">Drinks</p>
              </Col>
              <Col xs={4}>
                <h3 className="about-number">3</h3>
                <p className="about-label">Roast types</p>
              </Col>
            </Row>

            <Button className="about-btn">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;