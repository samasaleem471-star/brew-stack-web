import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  // Runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from reloading
    alert("Thank you! We will get back to you soon.");
    e.target.reset(); // clears the form
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        {/* Section title */}
        <h2 className="contact-heading text-center">Get In Touch</h2>
        <p className="contact-subheading text-center mb-5">
          Questions, orders or feedback? We would love to hear from you.
        </p>

        <Row>
          {/* Left side: contact info */}
          <Col xs={12} md={5} className="mb-4 mb-md-0">
            <div className="contact-info">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h5>Address</h5>
                <p>123 Coffee Street, Your City</p>
              </div>
            </div>

            <div className="contact-info">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h5>Phone</h5>
                <p>+00 123 456 7890</p>
              </div>
            </div>

            <div className="contact-info">
              <FaEnvelope className="contact-icon" />
              <div>
                <h5>Email</h5>
                <p>hello@brewstack.com</p>
              </div>
            </div>
          </Col>

          {/* Right side: form */}
          <Col xs={12} md={7}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="you@example.com" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message"
                  required
                />
              </Form.Group>

              <Button type="submit" className="contact-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;