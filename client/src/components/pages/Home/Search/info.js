import React, { Component } from "react";





export default class Info extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     country: props.country,
                     organisation: props.organisation,
                     city: props.city,
                     address: props.address,
                     phone: props.phone,
                     fax: props.fax
                   };
                 }
                 render() {
                   return (
                     <div>
                       <div className="country">
                         <label>Country: {this.state.country}</label>
                         <div className="organisation">
                           <label>Organisation name: {this.state.organisation}</label>
                         <div className="city">
                           <label>City: {this.state.city}</label>
                           <div className="address">
                             <label>Address: {this.state.address}</label>
                             <h5 className="phone">
                               <label>Phone: {this.state.phone}</label>
                               <span className="fax">
                                 <label>Fax: {this.state.fax}</label>
                               </span>
                             </h5>
                           </div>
                         </div>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }

