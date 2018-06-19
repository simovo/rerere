import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

import {UserProvider} from './contexts/UserContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route path="/login" component={LoginPage} />
          <Route path="/todo" component={TodoPage} />
          <Route exact path="/" component={Home} />
        </UserProvider>
      </BrowserRouter>
    )
  }
}

const Home = () => {
  if (localStorage.getItem('token')) {
    return <Redirect to="/todo" />;
  } else {
    return <Redirect to="/login" />;
  }
}

// const Home = () => (
//   localStorage.getItem('token') ? (
//     <Redirect to="/todo" />
//   ) : (
//     <Redirect to="/login" />
//   )
// )

export default App;