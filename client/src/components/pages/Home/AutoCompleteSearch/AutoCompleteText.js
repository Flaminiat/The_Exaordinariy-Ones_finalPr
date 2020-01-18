import React, { Component } from 'react';
import './AutoCompleteText.css';
import {Results} from "../resultsContainer";
import Info from "../Search/info.js";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { iconCyf } from "../icon";



export default class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
      selectedCountry: {},
      
    };
  }


  onTextChanged = e => {
    let { countries } = this.props;
    let data = countries.map(({ Country }) => {
      return Country;
    })
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionsSelected(value) {
    console.log("entered here");
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  handleSubmit= (e) => {
    e.preventDefault();
    console.log("handle submit");
    console.log(this.state.text);
    console.log(this.props.countries)
    this.props.countries.map(country => {
      if(country.Country === this.state.text) {
        this.setState(() => ({
          selectedCountry: country        
        }));
      }
    })
  }
  renderSuggestions() {

    const { suggestions } = this.state;
    
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li
            key={item}
            onClick={() => this.suggestionsSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log('autocompletetext')
    console.log(this.state.text);
    console.log(this.props.countries);
    console.log(this.state.selectedCountry);
    const { text } = this.state;
    console.log([parseFloat(this.state.selectedCountry.latitude), parseFloat(this.state.selectedCountry.longitude)]);
    return (
      <div>
      <div className="AutoCompleteText">
          <form name="myForm" onSubmit={this.handleSubmit} >
        <input
          placeholder='Search For Countries'
          value={text}
          onChange={this.onTextChanged}
          type="text"
        />
        {this.renderSuggestions()}
            <button type="submit" ></button>
          </form>
      </div>

        {this.state.selectedCountry
          ? <div>

            {/* {this.state.selectedCountry.map(({ Country, City, Organisation, Address, Phone, Fax, id }) => (
              <div key={id}> */}
            <div>
              <div className="country">
                <label>Country: {this.state.selectedCountry.Country}</label>
                <div className="organisation">
                  <label>Organisation name: {this.state.selectedCountry.Organisation}</label>
                  <div className="city">
                    <label>City: {this.state.selectedCountry.City}</label>
                    <div className="address">
                      <label>Address: {this.state.selectedCountry.Address}</label>
                      <h5 className="phone">
                        <label>Phone: {}</label>
                        <span className="fax">
                          <label>Fax: {this.state.selectedCountry.Fax}</label>
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Map
                  className="map"
                  center={[25.257017, 30.077524]}
                  zoom={2}
                  style={{ height: "500px" }}
                  maxZoom={20}
                  attributionControl={true}
                  zoomControl={true}
                  doubleClickZoom={true}
                  scrollWheelZoom={true}
                  dragging={true}
                  animate={true}
                  easeLinearity={0.35}
                >
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                </Map>

              </div>
            </div>
              {/* </div>
            ) */}
            )}
          </div>
        : <div></div>
        }
      </div >
    );
  }
}