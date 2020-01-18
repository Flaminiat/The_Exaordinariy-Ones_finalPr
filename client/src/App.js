import React, { Component } from "react";
import "./App.css";
import {Switch, Route } from "react-router-dom";

//Components

import NavBar from "./components/nav/nav.component";
import HomePage from "./components/HomePage/homepage.component";
import About from "./components/pages/About/About";


class App extends Component {
  

  render() {
   
    return (
      <>
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
        </Switch>
      </>
    );
  }
}



export default App;
