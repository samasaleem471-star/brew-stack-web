import { Container, Row, Col } from "react-bootstrap";
import { FaCoffee, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer  className="footer pt-5">
      <Container>
        <Row>
          {/* Column 1: logo and tagline */}
          <Col xs={12} md={6} lg={3} className="mb-4">
            <h4 className="footer-logo">
              <FaCoffee className="footer-icon" /> BrewStack
            </h4>
            <p className="footer-text">
              Freshly roasted coffee, made with love and served with a smile.
            </p>
          </Col>

          {/* Column 2: quick links */}
          <Col xs={6} md={6} lg={3} className="mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Column 3: opening hours */}
          <Col xs={6} md={6} lg={3} className="mb-4">
            <h5 className="footer-title">Opening Hours</h5>
            <ul className="footer-list">
              <li>Mon - Fri: 7am - 9pm</li>
              <li>Saturday: 8am - 10pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </Col>

          {/* Column 4: social icons */}
          <Col xs={12} md={6} lg={3} className="mb-4">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </Col>
        </Row>

        {/* Bottom line */}
        <div className="footer-bottom text-center py-3">
          © 2026 BrewStack. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;