import React from 'react';
import { subnavbars } from '../data';



class Navbar extends React.Component{
    render(){
        return(
     <li className={this.props.className}> <a id={this.props.id} href="#" > {this.props.title} </a>
    
        {this.props.subnavbar}
        
    
     </li> 
        );
    }
}

export default Navbar;