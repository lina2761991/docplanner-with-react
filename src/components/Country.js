import React from 'react';

class Country extends React.Component{
    render(){
        return(
          <a href={this.props.hrefcountry} target="_blank">{this.props.name} {' '}</a>
        );
    }
}

export default Country;