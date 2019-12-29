import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/Block.js';
import Company from './components/Company.js';
import CountryCard from './components/CountryCard.js';
import CountryButtonCard from './components/CountryButtonCard.js';
import Country from './components/Country.js';
import SelectedCountries from './components/SelectedCountries.js';
import Navbar from './components/Navbar.js';
import Subnavbar from './components/Subnavbar.js';

import  { blocks, companys, countryCards, countryButtonsCards, countries, navbars } from './data.js';

function App() {
  return (
    <div className="App">
   
	
 {/* <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>

  <div id="nav">
   <ul id='bul'>
   	 <li><a id="firstlist" href="#">About Us</a></li>
   	 <li><a id="secondlist" href="#">Career</a></li>
     <li className="subnav" >
      <a id="thirdlist" href="#">Departments</a>
     <div className="subsubnav">
       <ul>
         <li><a href="#">Marketing & PR</a></li>
         <li><a href="#">Customer Success & Sales</a></li>
         <li><a href="#">IT, Product, Design & UX</a></li>
         <li><a href="#">Finance & Administration</a></li>
         <li><a href="#">HR & More</a></li>
       </ul>
       </div>
     </li> 
    </ul>
</div> */}

<header>
        <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
        <div id="nav">
        <ul id='bul'>
		
				{navbars.map(function(element, i){
				return	<Navbar title={element.title} id={element.id} key={element.id} className={element.className} subnavbar={<Subnavbar/>} />
				})
				}
    
        </ul>
        </div>
    </header>






<main>
	<section className="classmarg">

	<div>
		<img className="lead__logo" src="https://www.docplanner.com/img/sygnet.png" srcSet="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"/>
		<h1>Making the healthcare experience more human</h1>
	</div>

	</section>

	<section className="classmarg">

   {blocks.map(function(element,i){

   if(i===0){

	return  <Block  select ={element.select} fortext={element.fortext} id={element.id} secondid={element.secondid} className={element.thirddiv} paragraph={element.paragraph} slogan={element.slogan} imagesource={element.imagesource} key={i} SelectedCountries={<SelectedCountries/>} />
}
else {

	return 	<Block  select ={element.select} fortext={element.fortext} id={element.id} secondid={element.secondid} className={element.thirddiv} paragraph={element.paragraph} slogan={element.slogan} imagesource={element.imagesource} key={i} />

}
   }
   )}
		


	</section>


	<section className="classmarg">
		<h1>We are a global company with local culture</h1>
			<ul id="ul3">
			{companys.map((element,i)=>
				<Company svgpath={element.svgpath} refff={element.refff} key={i}/>
			)}
			</ul>
	</section>	

	<section>

		<div id="section4div1">
			<div id="section4div11">
			<h1>The world's biggest healthcare platform</h1>
			<p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
		</div>
		
           <img src="https://www.docplanner.com/img/logo.png"/>

		</div>


<div id="section4div2">
			
	
			{countryCards.map((element,i)=>
				<CountryCard  id={element.id} sourcesrc={element.sourcesrc} sourcesrcSet={element.sourcesrcSet} header3={element.header3} paragraph={element.paragraph} key={i} />
			)}
		</div> 
	</section>	

   <section>
   	<h2>Improve the lives of millions. Change yours forever</h2>
   	<p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
   </section>

   <section>



	{countryButtonsCards.map((element,i)=>
				<CountryButtonCard sourcesrc={element.sourcesrc} sourcesrcset={element.sourcesrcSet} header3={element.header3} key={i} />
			)}
   </section>


   <footer>
  
		<p>We are leaders in 10 countries:
		
		{  countries.map((element,i)=>
		
			<Country hrefcountry={element.hrefcountry} name={element.name} key={i}  />
				
			)}
		</p>
		<p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>

		www.docplanner.com © 2019
	
   </footer>

</main>	
    </div>
  );
}

export default App;
