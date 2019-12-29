import React from 'react';
import SelectedCountries from './SelectedCountries';




class Block extends React.Component{
render(){
    return(
     <div id={this.props.id}>
		<p>{this.props.paragraph}</p>
		<div id={this.props.secondid}>
			<h4>{this.props.fortext}</h4>
			<h2>{this.props.slogan}</h2>
            <div className={this.props.thirddiv}>
			<div className="divaa">
		      {this.props.SelectedCountries}
			<img src={this.props.imagesource}/>
			</div>
			</div>
		</div>
	</div>
    );
}
}





export default Block;