import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ListComp extends React.Component{

    
    render(){
        return(
            <div className="row" id="skill">
            <div className="col">
                <h6 className="fs-5 fw-bold" >Skills</h6>
                <ul>
                    <li>Php</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>Css</li>
                    <li>MySql</li>
                    <li>Git</li>
                </ul> 
            </div>
            <div className="col">
                <h6 className="fs-5 fw-bold">Other Skills</h6>
                <ul>
                    <li>Node Express Js</li>
                    <li>Laravel</li>
                    <li>React.Js</li>
                    <li>Mechine Learning</li>
                    <li>Microservice</li>
                </ul>
            </div>
            <div className="col">
                <h6 className="fs-5 fw-bold">Language</h6>
                <ul>
                    <li>English</li>
                    <li>Indonesia</li>
                </ul>
            </div>
        </div>
        )
    };
};