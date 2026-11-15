import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./MenuCards.css";

// Add, edit or remove items here
const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich and bold shot made from freshly ground beans.",
    price: "$3.50",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Caramel Latte",
    description: "Smooth espresso with steamed milk and caramel syrup.",
    price: "$4.80",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Cold Brew",
    description: "Slow steeped for 12 hours and served over ice.",
    price: "$4.20",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Butter Croissant",
    description: "Flaky, golden and baked fresh every morning.",
    price: "$3.00",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
  },
];

function MenuCards() {
  return (
    <section id="menu" className="menu-section py-5">
      <Container>
        {/* Section title */}
        <h2 className="menu-heading text-center">Our Menu</h2>
        <p className="menu-subheading text-center mb-5">
          Made fresh every day, from first pour to last.
        </p>

        {/* 4 cards on desktop, 2 on tablet, 1 on mobile */}
        <Row>
          {menuItems.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={3} className="mb-4">
              <Card className="menu-card h-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  className="menu-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="menu-card-title">{item.name}</Card.Title>
                  <Card.Text className="menu-card-text">
                    {item.description}
                  </Card.Text>

                  {/* mt-auto pushes the price and button to the bottom */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="menu-price">{item.price}</span>
                    <Button className="menu-btn">Add</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default MenuCards;