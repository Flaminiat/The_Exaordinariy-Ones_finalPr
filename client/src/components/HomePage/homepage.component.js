import React, { Component } from 'react';
import Footer from "../footer/footer.component";
import HomeContainer from "../pages/Home/Home.js";
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


