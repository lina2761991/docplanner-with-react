import React from 'react';
import  {countries} from '../data.js';

class SelectedCountries extends React.Component{
    render(){
        return(
            <select>
				 <option defaultValue={-1}>CHOOSE COUNTRY</option>
                 {countries.map((element,i)=>
				 <option value={element.name} key={i}>{element.name}  </option>
                 )}		 
			</select>
        );
    }
}

export default SelectedCountries;