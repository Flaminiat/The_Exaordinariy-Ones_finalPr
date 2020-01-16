import React, { Component } from "react";
import "./App.css";
import {Switch, Route } from "react-router-dom";

//Components

import NavBar from "./components/nav/nav.component";
import HomePage from "./components/HomePage/homepage.component";
import About from "./components/pages/About/About";
import Ourwork from "./components/pages/Ourwork";
import AutoCompleteText from "./components/AutoCompleteSearch/AutoCompleteText";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  async componentDidMount() {
    const countries = await (
      await fetch("http://localhost:3100/countries")
    ).json();

    this.setState({ countries });
  }

  render() {
   
    return (
      <>
        <NavBar />
        <div className="App-Component">
          <AutoCompleteText countries={this.state.countries} />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/ourwork" component={Ourwork} />
          <Route path="/about" component={About} />
        </Switch>
      </>
    );
  }
}



export default App;
