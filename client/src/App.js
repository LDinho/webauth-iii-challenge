import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import SignUp from './Signup';
import Login from './Login';
import Users from './Users';
import Home from './Home';

import './App.css';

class App extends Component {

  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Auth User App
          </h1>
          <nav>
            <ul className="nav-list-ul">
              <li className="nav-list-li"><NavLink to="/">Home</NavLink></li>
              <li className="nav-list-li"><NavLink to="/login">Log in</NavLink></li>
              <li className="nav-list-li"><NavLink to="/signup">Sign up</NavLink></li>
              <li className="nav-list-li"><NavLink to="/users">Users</NavLink></li>
              <li className="nav-list-li"><button onClick={this.logout}>Logout</button></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/users" component={Users} />
        </main>
      </div>
    );
  }

}

export default withRouter(App);
