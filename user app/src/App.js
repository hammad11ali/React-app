import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Signup" component={Signup}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
