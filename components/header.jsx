import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router';

class Header extends React.Component {
   render() {
      return (
      		
				
			<nav className="navbar ">
		  		<div className="container-fluid">
			    	<div className="navbar-header">
			      		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        		<span className="icon-bar"></span>
			        		<span className="icon-bar"></span>
			        		<span className="icon-bar"></span>
			      		</button>
			      		<a className="navbar-brand" href="#"><img src="../images/logo.png" id="h_logo"/></a>
			    	</div>
				    <div className="collapse navbar-collapse" id="myNavbar">
			    
				      	<ul className="nav navbar-nav navbar-right">
				        	<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
			      		</ul>
			    	</div>
		  		</div>
		  		<div className="cover">
	  				<div className="outer lazy" data-original="image/background_2.png" style={{display: "table", backgroundImage: "url(../images/marketing-bg.jpg)"}}>
		            	<div className="inner constant-padding">	
		              		<h1>WE GET IT.</h1>
			              	<h4>One stop shop for all you need</h4>
			              	<h5>Get 15% off on everything. Use Promo Code <b>GROFERS15</b></h5>
			              	<h6>Max Discount Rs.100 | Valid only for new users</h6>
			              	<div className="download-app-btns">
				                
		              		</div>
	            		</div>
	          		</div>
	        	</div>
			</nav>

				
        	
      )
   }
}

export default Header;

