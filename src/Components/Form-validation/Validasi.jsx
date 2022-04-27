import React from "react";
import * as Validator from 'validatorjs';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label> {label}: </label>
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: `red`, marginLeft: `-10px`}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component{

    state = {
        name: ``,
        email: ``,
        message: ``,
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {name, email, message} = this.state;

        let data = { name, email, message };

        let rules = {
            name: `required`,
            email: `required|email`,
            message: `required`
        };

        let validation = new Validator(data, rules);
        validation.passes();
            this.setState ({
                errors: [
                    ...validation.errors.get(`name`),
                    ...validation.errors.get(`email`),
                    ...validation.errors.get(`message`)
                ]
            })
        validation.fails();
                alert (`
                    Name : ${this.state.name}
                    Email : ${this.state.email}
                    Message : ${this.state.message}
                `)
    }

    render(){
        return(
            <section className="contact" id="kontak1">
                
                <h1 style={{fontSize: "30px"}}>My Contact</h1>
                    <div className="kontak1">
                    
                        <form onSubmit={this.handleSubmit}>
                            <Input type="text" name="name" label="Name" 
                                onChange={value => this.setState({name: value})}/>
                                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                            <Input type="email" name="email" label="Email" 
                                onChange={value => this.setState({email: value})}/>
                                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                            <Input type="text" name="message" label="Message" style= {{height: "170px"}}
                                onChange={value => this.setState({message: value})}/>
                                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                            <input type="submit" placeholder="submit" />
                        </form>
                    </div>
            </section>
        )
    }
}