import React, { Component } from "react";

import axios from './helpers/api';

class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }
    // this.defaultState = this.state;

  }

  async componentDidMount() {

    try {
      const result = await axios.get('/users');

      this.setState({
        users: result.data,
      })

    }
    catch (err) {
      console.error(err);
    }

  }

  render() {

    return (
      <>
        <h2 className="users">
          Users
        </h2>

        <ul className="users-list">
          {this.state.users.map((user) => {

            return <li key={user.id}> {user.username} </li>

          })}
        </ul>

      </>
    );
  }
}

export default Users;
