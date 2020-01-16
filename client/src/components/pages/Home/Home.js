import React, { Component } from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import Search from "./Search/search.component";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export default class HomeContainer extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     countries: [],
                     searchField: "",
                     isShown: 0
                   };
                 }

                 componentDidMount() {
                   fetch("http://localhost:3100/countries")
                     .then(result => result.json())
                     .then(countries => this.setState({ countries }));
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
                   console.log(this.state.countries);

                   const { searchField, countries } = this.state;

                   const filterredSearch = countries.filter(
                     ({ Country, City }) =>
                       Country.toLowerCase().includes(
                         searchField.toLowerCase()
                       ) ||
                       City.toLowerCase().includes(searchField.toLowerCase())
                   );
                   return (
                     <div className="jumbotron">
                       <h1 className="heading">
                         Search your country to find your national Caritas
                       </h1>
                       <div className="container">
                         <div className="colomn">
                           <div className="input-group md-form form-sm form-2 pl-0">
                             <input
                               className="form-control my-0 py-1 red-border"
                               type="text"
                               placeholder="Search"
                               aria-label="Search"
                               onChange={this.handleChange}
                             ></input>
                             <Button variant="outline-success">Search</Button>
                             <div className="input-group-append"></div>
                           </div>
                         </div>
                       </div>
                       <div>
                         {this.state.isShown == 1 && (
                           <Search
                             handleChange={this.handleChange}
                             searchInfo={filterredSearch}
                           />
                         )}
                       </div>
                     </div>
                   );
                 }
               }
