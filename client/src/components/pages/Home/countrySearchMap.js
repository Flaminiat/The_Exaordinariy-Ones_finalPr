import React, { Component } from 'react';
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import { iconCyf } from "./icon";
import Info from "./Search/info.js";

export default class CountrySearchMap extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     country: props.country,
                     city: props.city,
                     address: props.address,
                     organisation: props.organisation,
                     phone: props.phone,
                     fax: props.fax,
                     LatLng: { lat: parseFloat(props.latitude),
                     lng: parseFloat(props.longitude) },
                     showInfo: 0
                   };
                   this.handleClick = this.handleClick.bind(this);
                 }

                 handleClick(e) {
                   console.log(this.state.LatLng);
                  this.setState({showInfo: 1});

                 };

                
                 render() {

                   
                   return (
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
                         <Marker
                           key={this.state.city}
                           position={this.state.LatLng}
                           icon={iconCyf}
                           onClick={this.handleClick}
                         >
                           <Popup>{this.state.organisation}</Popup>
                         </Marker>
                       </Map>
                       {this.state.showInfo == 1 && <Info country={this.state.country} city={this.state.city}
                     address={this.state.address}
                     phone={this.state.phone} 
                     fax={this.state.fax} />}
                     </div>
                   );
                 }
               }
