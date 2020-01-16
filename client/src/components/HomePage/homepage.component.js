import React from "react";
import Footer from "../footer/footer.component";
import Map from "../map/map.component";
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




const HomePage = ()=>{
	return (
    <div>
      <Map />
      <Footer />
    </div>
  );
	
				
			
				

			
				
		
		
}

	


export default HomePage;