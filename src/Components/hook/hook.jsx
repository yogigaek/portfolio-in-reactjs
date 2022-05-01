import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpinnerDiamond } from 'spinners-react';

const FunctionalHook = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
    }, []);

    const getData = (key) => {
        setLoading(true);
        fetch(`https://newsapi.org/v2/everything?apiKey=7f237570bfa444a7b49515ab49db8476&q= ${key} `)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                setData(response.articles);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
            });
    };

    return (
        <div className="container cardNews">
            <div className="row">
                <div className="row mt-3 ">
                    <h1>Latest News DB</h1>
                </div>
                <div className="input-group mb-3" controlid="">
                    <input type="text" className="form-control input-keyword" id="search" placeholder="Search News.."
                        onChange={(e) => getData(e.target.value)} />
                </div>
                {error ? (
                    <div className="row alert alert-danger alert-sm" style={{ textAlign: "center" }}>
                        Data No Response !
                    </div>
                ) : (``)}
                {loading ? (<SpinnerDiamond className="spinner" size={90} thickness={180} speed={180} color={"rgba(172, 57, 57, 1)"} secondaryColor={"rgba(0, 0, 0, 0.44)"} />)
                    : ( 
                        data.map((n) => (
                            <div className="col-md-4 my-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={n.urlToImage} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title"> <strong> {n.title} </strong> </h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{n.publishedAt}</h6>
                                        <h6 className="card-subtitle mb-2 text-muted">{n.source.name}</h6>
                                        <h6 className="card-subtitle mb-2">{n.description}</h6>
                                        <a href={n.url} className="btn btn-primary">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                };
            </div>
        </div>
    );
}

export default FunctionalHook;