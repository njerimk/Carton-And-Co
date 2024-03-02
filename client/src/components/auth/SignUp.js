import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      password: '',
      password_confirmation: '',
      registrationErrors: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { user_name, password, password_confirmation } = this.state;

    // Check if password and password confirmation match
    if (password !== password_confirmation) {
      this.setState({ registrationErrors: 'Password and confirmation do not match' });
      return;
    }

    axios
      .post(
        'http://localhost:3000/registrations/',
        {
          user: {
            user_name,
            password,
            password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === 'created') {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
        // Handle server errors and update state with an error message
        this.setState({ registrationErrors: 'Registration failed. Please try again.' });
      });
  };

  render() {
    return (
      <div className="topnav">
        <div className="login-container" style={{ marginRight: '10px' }}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="username"
                name="user_name"
                placeholder="Username"
                value={this.state.user_name}
                onChange={this.handleChange}
                required
              />
            </div>
            <br />

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <br />

            <div>
              <input
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                required
              />
            </div>
            <br />

            <div>
              <button type="submit">Sign Up</button>
            </div>
            <br />

            {this.state.registrationErrors && (
              <div style={{ color: 'red' }}>{this.state.registrationErrors}</div>
            )}
          </form>
        </div>
      </div>
    );
  }
}
