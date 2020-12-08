import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Login from './Authentication/Login';
import Register from './Authentication/Register';

// const App = () => (
//   <>
//     <NavBar />
//   </>
// );

class App extends Component {

  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/login" key="login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={NavBar} />
        </Switch>
      </BrowserRouter>
    </div>

  )
  }
}
export default App;
