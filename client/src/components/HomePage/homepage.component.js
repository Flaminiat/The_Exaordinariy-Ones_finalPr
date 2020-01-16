import Footer from "../footer/footer.component";
import React, { Component } from 'react';
import HomeContainer from "../pages/Home/Home.js";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import PickCoordMap from "./pickCoordMap.js";



export default class HomePage extends Component {
                
                 render() {


					 
                   return (
                     <div>
                       <PickCoordMap />
                       <HomeContainer />
                       <Footer />
                     </div>
                   );
                 }
               };

