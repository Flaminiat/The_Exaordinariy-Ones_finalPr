import React, { Component } from 'react';

import Result from "../Result/Result";
import CountrySearchMap from "../countrySearchMap";
import "./search.style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const  = ({ handleChange, searchInfo }) => (
	// 

export default class Search extends Component {

                 render() {
                   return (
                     <div>
                       <div>
                         {this.props.searchInfo.map(
                           ({ Country, City, Address, Phone, Fax, id }) => (
                             <div key={id}>
                               <Result
                                 country={Country}
                                 city={City}
                                 address={Address}
                                 phone={Phone}
                                 fax={Fax}
                               />
                             </div>
                           )
                         )}
                       </div>
                       <div>
                         {this.props.searchInfo.map(
                           ({
                             Country,
                             City,
                             Address,
                             Phone,
                             Fax,
                             id,
                             latitude,
                             longitude
                           }) => (
                             <div key={id}>
                               <CountrySearchMap
                                 country={Country}
                                 city={City}
                                 address={Address}
                                 phone={Phone}
                                 fax={Fax}
                                 latitude={latitude}
                                 longitude={longitude}
                               />
                             </div>
                           )
                         )}
                       </div>
                     </div>
                   );
                 }
               }


