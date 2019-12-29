import React from 'react';

class CountryCard extends React.Component{
    render(){
        return (
            <div className="vert-align" id={this.props.id}>
                    <div>
                        <img scr={this.props.sourcesrc} srcSet={this.props.sourcesrcSet}/>
                        <h3>{this.props.header3}</h3>
                        <p>{this.props.paragraph}</p>
                    </div>
            </div>
        );
    }
}

export default CountryCard;