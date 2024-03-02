import React, { Component } from 'react'

import axios from 'axios';

export default class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = {
            user_name: "",
            password: "",
            password_confirmation: "",
            registrationErrors: "wrong username or password try again"
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit=(e)=>{
      

        axios.post("http://localhost:3000/registrations/", {
            user: {
                user_name: this.state.user_name,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        },
        { withCredentials: true }
        ).then(response => {
            if(response.data.status === 'created'){
            this.props.handleSuccessfulAuth(response.data)}
        }).catch(error => {
            console.log("registration error", error);
        })
        e.preventDefault();
    }


    render() {
        return (
            <div className="topnav">

            <div className="login-container" style={{marginRight: "10px"}}> 
            <form onSubmit={this.handleSubmit}>   
            <div>

            <input type="username"
                name="user_name"
                placeholder="Username"
                value={this.state.user_name}
                onChange={this.handleChange} 
                required 
                />
            </div>
            <br/>

            <div>

            <input type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange} 
                required />
            </div>
            <br/>

            <div>
            <input type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                value={this.state.password_confirmation}
                onChange={this.handleChange} 
                required />
            </div>
            <br/>

            <div>
                <button type="submit">Sign Up</button>
            </div>            
            <br/>
            </form>
        </div>
    </div>
        )
    }
}