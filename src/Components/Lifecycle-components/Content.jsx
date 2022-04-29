import React from "react";
import { Card, Col, Form } from "react-bootstrap";
import { messages } from "validatorjs/src/lang";

export default class ContentNews extends React.Component {
    state = { news: [], search: "", errors: false };
    getData = (key) => {
        if (key === "") {
            key = "all";
        }
        this.setState({ loading: true });
        const data = fetch(
            `https://newsapi.org/v2/everything?apiKey=b5305618e2b14b5fad3fd5edc494de20&q= + ${key}`
        );
        if (data) {
            data
                .then((response) => response.json())
                .then((response) => {
                    const news = response.articles;
                    this.setState({ news });
                })
                .catch((err) => {
                    this.setState({ errors: err.message });
                })
                .finally(() => { });
        } else {
            this.setState({ errors: true });
        }
    };

    getMessage(messages) {
        return messages;
    }
    componentDidMount() {
        const key = "";
        this.getData(key);
    }
    search = async (key) => {
        this.getData(key);
    };
    changeHandler = async (e) => {
        if (this.search === "") {
            this.serach(`all`);
            this.setState({ value: e.target.value });
        } else {
            this.search(e.target.value);
            this.setState({ value: e.target.value });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row mt-3">
                        <h1>Latest News DB</h1>
                    </div>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Control
                            type="text"
                            name="search"
                            placeholder="Search News..."
                            value={this.state.value}
                            onChange={(e) => this.changeHandler(e)}
                        />
                    </Form.Group>
                    {!this.state.news ? (
                        <div className="alert alert-secondary alert-sm" >
                            Data No Response !
                        </div>
                    ) : (
                        this.state.news.map((n, i) => (
                            <Col key={i} sm={4}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img variant="top" src={n.urlToImage} />
                                    <Card.Body>
                                        <h5 class="card-title">{n.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{n.publishedAt}</h6>
                                        <h6 className="card-subtitle mb-2 text-muted">{n.source.name}</h6>
                                        <Card.Text>{n.description}</Card.Text>
                                        <a href={n.url} className="btn btn-primary">
                                            Read More
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                    {console.log(this.getMessage(messages))}
                </div>
            </div>
        );
    }
}
