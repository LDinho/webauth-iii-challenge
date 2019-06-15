import React, { Component } from 'react';

import axios from './helpers/api';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }

    this.defaultState = this.state;

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {username, password} = this.state;

    try {

      const result = await axios.post('/auth/login', {
        username,
        password,
      });

      const token = result.data.authToken;
      localStorage.setItem('token', token);

      console.log(result);
    }
    catch (err) {
      console.error(err);

    }

    this.setState({
      ...this.defaultState,

    })
  }

  render() {

    return (
      <>
        <h3 className="login">
          Log in
        </h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 name="username"
                 placeholder="Username"
                 value={this.state.username}
                 onChange={this.handleChange}
          />
          <input type="password"
                 name="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default Login;
