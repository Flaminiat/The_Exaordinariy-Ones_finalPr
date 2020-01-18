import React, { Component } from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import Search from "./Search/search.component";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import AutoCompleteText from "./AutoCompleteSearch/AutoCompleteText";


export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isShown: 0
    };
  }
  
  async componentDidMount() {
    const countries = await (
      await fetch("http://localhost:3100/countries")
    ).json();

    this.setState({ countries });
  }

handleChange = e => {
    this.setState({
      searchField: e.target.value,
      isShown: 1
    });
  };

showIt = number => {
  this.setState({ isShown: 1 });
};
render() {
  console.log('home')
  console.log(this.state.countries);


  
  return (
    <div className="jumbotron">
      <h1 className="heading">
        Search your country to find your national Caritas
      </h1>

      <div className="App-Component">
        <AutoCompleteText countries={this.state.countries} />
      </div>
    
    </div>
  );
}
}
