import react from 'react';
import Info from "./Search/info.js";
import CountrySearchMap from "./countrySearchMap";


export default function Results (props) {
    
        console.log("result");
   
        return (
            <div>
                
             {props.selectedCountry.map(({ Country, City, Organisation, Address, Phone, Fax, id }) => (
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
           

            
);
}
