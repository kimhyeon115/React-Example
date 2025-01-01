import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  // 사용자 정보 API 호출
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user")
      .then((response) => setUserInfo(response.data))
      .catch((error) => console.error("Error fetching user info:", error));
  }, []);

  // 제품 목록 API 호출 (더미 데이터)
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to the Simple Shop</h1>
          {userInfo && <p>Logged in as: {userInfo.name}</p>}
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;