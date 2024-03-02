import React, { Component } from 'react'
import '../LogIn.css'

import axios from 'axios';

export default class LogIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            user_name: "",
            password: "",
            loginErrors: ""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit=(e)=>{
      

        axios.post("http://localhost:3000/sessions", {
            user: {
                user_name: this.state.user_name,
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then(response => {
            if(response.data.logged_in){
            this.props.handleSuccessfulAuth(response.data)}
        }).catch(error => {
            console.log("login error", error);
        })
        e.preventDefault();
    }


    render() {
        return (
            <div class="topnav">

            <div class="login-container" style={{marginRight: "10px"}}>

            <form onSubmit={this.handleSubmit} action="/action_page.php">   
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


                <button type="submit">Log In</button>
            </form>
        </div>
        </div>
        )
    }
}