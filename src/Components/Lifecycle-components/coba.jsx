import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { messages } from "validatorjs/src/lang";

export default class FetchData extends React.Component {
  state = { beritas: [], search: "", error: false };
  get_Data = (val) => {
    if (val === "") {
      val = "all";
    }
    this.setState({ loading: true });
    const data = fetch(
      `https://newsapi.org/v2/everything?q=${val}&from=2022-04-15&sortBy=popularity&apiKey=9c2510131de24d47a20d9f258085ac19`
    );
    if (data) {
      data
        .then((response) => response.json())
        .then((response) => {
          const beritas = response.articles;
          this.setState({ beritas });
        })
        .catch((err) => {
          this.setState({ error: err.message });
        });
    } else {
      this.setState({ error: true });
    }
  };
  messagers(messages) {
    return messages;
  }
  componentDidMount() {
    const val = "";
    this.get_Data(val);
  }
  search = async (val) => {
    this.get_Data(val);
  };
  onChangeHandler = async (e) => {
    if (this.search === "") {
      this.search("all");
      this.setState({ value: e.target.value });
    } else {
      this.search(e.target.value);
      this.setState({ value: e.target.value });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h3>Tugas LifeCycle Component</h3>

            <Form.Group className="mb-3" controlId="">
              <Form.Control
                type="text"
                name="search"
                placeholder="Search Country"
                value={this.state.value}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </Form.Group>
            {!this.state.beritas ? (
              <div className="alert alert-danger alert-sm">
                Tidak Ada Response Data
              </div>
            ) : (
              this.state.beritas.map((berita, i) => (
                <Col key={i} sm={4}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={berita.urlToImage} />
                    <Card.Body>
                      <Card.Title>{berita.title}</Card.Title>
                      <Card.Text>{berita.description}</Card.Text>
                      <a href={berita.url} className="btn btn-primary">
                        Go Somewhere
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
            {console.log(this.messagers(messages))}
          </Row>
        </Container>
      </div>
    );
  }
}