import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
export default function FetchHooks() {
  const [beritas, setBerita] = useState([]);
  
  const [error, seterror] = useState(true);
  useEffect(() => {
    AxiosData();
  }, []);
  const AxiosData = async (value) => {
    let Response = await axios.get(
      `https://newsapi.org/v2/everything?q=${value}&from=2022-04-15&sortBy=popularity&apiKey=9c2510131de24d47a20d9f258085ac19`
    );
    if (!Response) {
      seterror(true);
    } else {
      seterror(false);
      console.log(Response.data.articles);
      setBerita(Response.data.articles);
    }
  };

  return (
    <div>
      <Container>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tugas HOOKS</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search Country"
            onChange={(e) => AxiosData(e.target.value)}
          />
        </Form.Group>
        <Row>
          {error ? (
            <div className="alert alert-danger">Tidak Ada Response Data</div>
          ): (
            beritas.map((a) => (
              <Col sm={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={a.urlToImage} />
                  <Card.Body>
                    <Card.Title>{a.title}</Card.Title>
                    <Card.Text>{a.description}</Card.Text>
                    <a href={a.url} className="btn btn-primary">
                      Go somewhere
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
          {}
        </Row>
      </Container>
    </div>
  );
}