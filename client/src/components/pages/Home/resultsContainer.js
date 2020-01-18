import React, { Component } from 'react';
import Info from "./Search/info.js";
import CountrySearchMap from "./countrySearchMap";


export default class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            countryToShow: "France"

            }

        }

    componentDidMount() {
        fetch("http://localhost:3100/countries")
            .then(result => result.json())
            .then(countries => this.setState({ countries }));
    }
    render() {
        console.log(this.state.countries);
        const { countryToShow, countries } = this.state;
                    
                   return (
                       <div>
                           <div>
                               
                           </div>
        <div>


                           {this.state.countries
                                   .filter((element) => element.Country === countryToShow)
                                    .map(({ Country, City, Organisation, Address, Phone, Fax, id }) => (
                                    <div key={id}>
                                        <Info
                                        country={Country}
                                           organisation={Organisation}
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
                           {this.state.countries
                           
                            .filter((element) => element.Country === countryToShow)
                           .map(
                               ({
                                   Country,
                                   Organisation,
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
                                               organisation={Organisation}
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
