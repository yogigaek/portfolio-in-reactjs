import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TableComp2 extends React.Component{

    render(){
        return(
            <div className="kampret1">
                <h6 className="fs-5 fw-bold text-center">Table Other Skills</h6>

                <table className="table table-dark table-striped table-sm" >
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Grafik</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1.</th>
                            <td>Node Express Js</td>
                            <td><div className="pena"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">2.</th>
                            <td>Laravel</td>
                            <td><div className="pena1"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">3.</th>
                            <td>React Js</td>
                            <td><div className="pena2"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">4.</th>
                            <td>Machine Learning</td>
                            <td><div className="pena3"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">5.</th>
                            <td>Microservice</td>
                            <td><div className="pena4"></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}