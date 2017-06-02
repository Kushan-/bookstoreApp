import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
 

class About extends React.Component {

	getInitialState(){
    return { 
      datainput: {}
    }
  }

	submitForm(datainput){
		console.log("In submit form")
		$.ajax({
	     	url: '/api/comments',
	     	dataType: 'json',
	     	type: 'POST',
	     	data: datainput,
	     	success: function(response) {
	        	
	        	console.log(response);
	      	}.bind(this),
	      	error: function(xhr, status, err) {
	        	console.error(this.props.url, status, err.toString());
	      	}.bind(this)
	    });
		console.log("sending data");
	}


    render() {
      return (
     	<div>
        	<div className="container">
				<SummitForm summitVal={this.submitForm}/> 	
			</div>
				
     	</div>
      )
   }
}

export default About;


class SummitForm extends React.Component{
	
	

	enableSerch(){
		console.log(event.target.id)
		var InputBox = document.getElementById("Iplchlder").parentElement;	
		
		if(InputBox.parentElement.style.display == "none"){
			InputBox.parentElement.style.display = "block";
			InputBox.parentElement.nextSibling.style.display = "none";
		}
	}
	enableProduct(event){
		console.log(event.target.id)
		var InputBox = document.getElementById("Iplchlder").parentElement;	
		var dropdown = InputBox.parentElement.nextSibling;
	
		if(dropdown.style.display == "none"){
			InputBox.parentElement.style.display =  "none";
			dropdown.style.display = "block"
		}
		
		

	}

	constructor(props) {
      super(props);
      this.validateForm = this.validateForm.bind(this);
   } 

	validateForm(event){
		
		event.preventDefault();
		console.log(event.target);
		console.log(this.refs.pVal.value);
		console.log(this.refs.s_o_val.parentElement.style.display);
		console.log(this.refs.s_o_val.value);
		var buttonVal;
		var inputVal;
		if(this.refs.s_o_val.parentElement.style.display == "none"){
			console.log("seller info");
			buttonVal = "Seller";
			inputVal = this.refs.name.value
		}else{
			buttonVal = "Product";
			inputVal = this.refs.s_o_val.value
		}
		console.log(inputVal)
		var data = {
			input : inputVal,
			button : buttonVal,
			locationVal : this.refs.location.value
		}
	 	if (!data.input || !data.locationVal) {
  				return;
		}
			
		console.log("-----------------------")
		console.log(data);
		this.props.summitVal(data);
	};



	render(){
		
		return(
			<form className="form-inline" ref="postform" onSubmit={this.validateForm} >
					<div className="col-xs-12 col-sm-offset-2 col-sm-1" style={{padding : 0}}>
						<input style={{width: 100+'%'}} ref = "sVal" type="button" className="btn btn-primary btn-lg" value="Seller" onClick= {this.enableSerch.bind(this)}/>
						
					</div>
					<div className="col-xs-12 col-sm-1" style={{padding : 0}}>
						<input ref = "pVal" type="button" className="btn btn-info btn-lg" style={{width: 100+'%'}}  value="Products" onClick= {this.enableProduct.bind(this)} />
					</div>
					<div className="col-xs-12 col-sm-3 " style={{padding : 0}}>
						<div className="input-group input-group-lg" style={{width: 100+'%'}} >
			  			
			  				<input type="text" ref = "name" className="form-control" id="Iplchlder" placeholder="Looking for..." aria-describedby="sizing-addon1"/>
						</div>
					</div>

					<div style={{display:'none', padding : 0}} className="col-xs-12 col-sm-3 "  >
						<select id = "s_select" ref="s_o_val" style={{width:100 + '%'}}>
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
					 		<option value="mercedes">Mercedes</option>
 						  	<option value="audi">Audi</option>
						</select>
						
					</div>


					<div className="col-xs-12  col-sm-2" style={{padding : 0}}>
						<div className="input-group input-group-lg">
		  					<input type="text" className="form-control" ref="location" placeholder="Location..." aria-describedby="sizing-addon1"/>
						</div>
					</div>
					<div className="col-xs-12 col-sm-1 btn-group btn-lg" style={{padding : 0}}>
					<button type="submit" className="btn btn-success btn-lg">go</button>
					
					</div>
				</form>
			

		)
 	}
}