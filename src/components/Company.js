import React from 'react';





class Company extends React.Component{
render(){
    return(
            <li>
				<a href={this.props.refff} target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" width="195" height="32" viewBox="0 0 195 32">
                       <path d={this.props.svgpath}></path>
					</svg>
				</a>
			</li>
    );
}
}


export default Company;
