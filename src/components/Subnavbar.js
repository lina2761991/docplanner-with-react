import React from 'react';


class Subnavbar extends React.Component{
    render(){
        return (
        <div className="subsubnav">
        <ul>
         <li><a href="#">Marketing & PR</a></li>
         <li><a href="#">Customer Success & Sales</a></li>
         <li><a href="#">IT, Product, Design & UX</a></li>
         <li><a href="#">Finance & Administration</a></li>
         <li><a href="#">HR & More</a></li>
       </ul>
       </div>
        );
    }
}

export default Subnavbar;