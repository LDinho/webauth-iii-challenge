import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignUp from './Signup'
import Login from './Login'
import Users from './Users'

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><NavLink to="/login">Log in</NavLink></li>
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>
        </nav>
        <h1>
          Auth User App
        </h1>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/users" component={Users} />
      </main>
    </div>
  );
}

export default App;
