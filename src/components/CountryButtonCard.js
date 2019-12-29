import React from 'react';


class CountryButtonCard extends React.Component{
    render(){
        return(
            <div className="office">
                <a href="#" className="office__inner">
                    <img scr={this.props.sourcesrc} srcSet={this.props.sourcesrcset}/>
                    <div className="office__desc">
                        <h3>{this.props.header3}</h3>
                        <button>SEE OPENINGS</button>
                    </div>
                </a>
            </div>
        );
    }
}


export default CountryButtonCard;