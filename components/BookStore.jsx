import React from 'react';

class Bookstore extends React.Component{

	constructor(props) {
		super(props);
			this.state = {
				currentStep: 1, formValues:{},
				
			}
		
		console.log(this.state)
		this.updateFormData = this.updateFormData.bind(this);
	}

	updateFormData(formData){
		console.log("updating form data")
		console.log(formData);
		console.log("currentstep = " + this.state.currentStep);
		
		var formValues = Object.assign({}, this.state.formValues, formData);
		var nextStep = this.state.currentStep + 1;
		this.setState({currentStep: nextStep, formValues: formValues})
		console.log("passed");
		console.log();
		
	}

	render(){
	console.log("===currentState====")
	console.log(this.state.currentStep);
		switch(this.state.currentStep){
			case 1 : 
				return <Booklist updateFormData = {this.updateFormData}/>;
			case 2: 
				return <ShippingDetails updateFormData = {this.updateFormData}/>
			case 3 : 
				return <DeliveryDetails updateFormData = {this.updateFormData}/>
			case 4:
				return <Confirmation data={this.state.formValues} updateFormData={this.updateFormData}/>
			case 5:
				return <Success data={this.state.formValues}/>
			default:
				return <BookList updateFormData={this.updateFormData} />
		}
	}
}

class Booklist extends React.Component{
	constructor(){
		super();
		this.state = {
			books : [
					{ name: 'Zero to One', author: 'Peter Thiel' },
					{ name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
					{ name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
				],
				booksSelected: [],
				error: false
		}
		this.handleSelectedBooks = this.handleSelectedBooks.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		console.log(this.state);
	}

	_renderError(){
		console.log(this.state.error)
		if(this.state.error){
			console.log("displY ERRor")
			return(
				<div className = "alert alert-danger">
				{this.state.error}
				</div>
			)
		}
	}

	_renderBook(book) {
		console.log("here")
		return(
			<div className="checkbox">
				<label>
					<input type="checkbox" value ={book.name} onChange={this.handleSelectedBooks}/> 
						{book.name} -- {book.author}
				</label>
			</div>
		);
	}

	handleSelectedBooks(event) {
		console.log(this.state);
		var selectedBooks = this.state.booksSelected;
		var index = selectedBooks.indexOf(event.target.value);
		console.log(event.target)
		console.log("index = " + index);
		if (event.target.checked) {
			if (index === -1)
				selectedBooks.push(event.target.value);
			} else {
				selectedBooks.splice(index, 1);
		}
		console.log(selectedBooks);
		this.setState({selectedBooks: selectedBooks });
		
		console.log("currentstep")
	}



	render(){
		var errorMessage = this._renderError();
		console.log(errorMessage)
		console.log(this.state.books)
		return(
			<div>

				<h3>Choose from wide variety of books available in our store</h3>
				{errorMessage}
				<form onSubmit={this.handleSubmit}>
					{ this.state.books.map((book, key) => { return (this._renderBook(book)); })}
						<input type="submit" className="btn btn-success" />
				</form>
			</div>
		)
	}

	handleSubmit(event) {
		console.log(event);
		event.preventDefault();

		
		if(this.state.booksSelected.length === 0) {
			this.setState({error: 'Please choose at least one book to continue'});
		} else {
			this.setState({error: false});
			this.props.updateFormData({ booksSelected: this.state.booksSelected });
		}
		console.log(this.state.booksSelected);
		console.log("Form submitted");
	}
}

class ShippingDetails extends React.Component{
	constructor(){
		super();
		this.state = {
			fullName: '', 
			contactNumber: '', 
			shippingAddress: '', 
			error:false
		}
		
		this._validateInput = this._validateInput.bind(this);
		
		this._handleSubmit = this._handleSubmit.bind(this);
		
		this._handleChange = this._handleChange.bind(this);
	}

	_renderError(){
		if(this.state.error){
			return(
				<div className="alert alert-danger">{this.state.error}</div>
			)
		}
	}

	_validateInput(){
		if (this.state.fullName === '') {
			this.setState({error: "Please enter full name"});
		} else if (this.state.contactNumber === '') {
			this.setState({error: "Please enter contact number"});
		} else if (this.state.shippingAddress === '') {
			this.setState({error: "Please enter shipping address"});
		} else {
			this.setState({error: false});
			return true;
		}
	}

	_handleSubmit(event) {
		event.preventDefault();
		var formData = { 
			fullName: this.state.fullName,
			contactNumber: this.state.contactNumber,
			shippingAddress: this.state.shippingAddress,

		}

		if (this._validateInput()) {
				console.log("_validating input")
				console.log(formData);	
				this.props.updateFormData(formData);
				console.log(this.props.updateFormData(formData))
		}
	}

	_handleChange(event, attribute) {
		var newState = this.state;
		newState[attribute] = event.target.value;
		this.setState(newState);
		//console.log(this.state);
	}
	render() {
		var errorMessage = this._renderError();
		return (
		<div>
			<h1>Enter your shipping information.</h1>
			{errorMessage}
			<div style={{width: 200}}>
				<form onSubmit={this._handleSubmit}>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Full Name" value={this.state.fullName} 		onChange={(event) => this._handleChange(event,'fullName')} />
					</div>
					<div className="form-group">
						<input className="form-control" type="text"	placeholder="Contact number" value={this.state.contactNumber}
							onChange={(event) => this._handleChange(event,'contactNumber')}/>
					</div>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Shipping Address" value={this.state.shippingAddress}
							onChange={(event) => this._handleChange(event, 'shippingAddress')} />
					</div>
					<div className="form-group">
					<button type="submit" ref="submit" className="btn btn-success">
						Submit
					</button>
					</div>
				</form>
			</div>
		</div>
	);
}
};

	
	
class DeliveryDetails extends React.Component{
	constructor(){
		super();
		this.state = {
			deliveryOption : "primary"
		}
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSummit = this.handleSummit.bind(this);

	}

	handleChange(e){
		this.setState({deliveryOption : e.target.value});
	}

	handleSummit(event){
		console.log(event)
		event.preventDefault();
		console.log(this.state)
		this.setState(this.state);
		console.log("passed delivery")
		console.log(this.props.updateFormData(this.state))
		
	}

	render(){
		return(
			<div>
				<h1>Choose your delivery options here.</h1>
					<div style={{width:200}}>
						<form onSubmit={this.handleSummit}>
							<div className="radio">
								<label>
									<input type="radio" checked={this.state.deliveryOption === "Primary"} value="Primary" onChange={this.handleChange} />
										Primary -- Next day delivery
								</label>
							</div>
							<div className="radio">
								<label>
									<input type="radio" checked={this.state.deliveryOption === "Normal"} value="Normal" onChange={this.handleChange} />
										Normal -- 3-4 days
								</label>
							</div>
							<button className="btn btn-success">
								Submit
							</button>
						</form>
					</div>
			</div>
		)
	}
}
export default Bookstore;	


class Confirmation extends React.Component{
	
	constructor(){
		super();
		
	
		
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.props);
		this.props.updateFormData(this.props.data);
	}
	render() {
		console.log("confirmation data");
		console.log("confirmation data")
		console.log(this.props.data)
		console.log(this.props.data.booksSelected)
		console.log("----- end confirmation-----")
		return (
			<div>
				<h1>Are you sure you want to submit the data?</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<strong>Full Name</strong> : { this.props.data.fullName }
					</div><br/>
					<div>
						<strong>Contact Number</strong> : { this.props.data.contactNumber }
					</div><br/>
					<div>
						<strong>Shipping Address</strong> : { this.props.data.shippingAddress}
					</div><br/>
					<div>
						<strong>Selected books</strong> : { this.props.data.booksSelected }
					</div><br/>
					<button className="btn btn-success">
						Place order
					</button>
				</form>
			</div>
		)
	}
}



class Success extends React.Component{
	render() {
	console.log("----------------");
	console.log(this.props.data);
	console.log(this.props.data.booksSelected);

	console.log("----------------");
		var numberOfDays = "1 to 2 ";
		if (this.props.data.deliveryOption === 'Normal') {
			numberOfDays = "3 to 4 ";
		}
		return (
			<div>
				<h2>
					Thank you for shopping with us {this.props.data.fullName}.
				</h2>
				<h4>
					You will soon get {this.props.data.booksSelected.join(", ")} at {this.props.data.shippingAddress} in approrximately {numberOfDays} days.
				</h4>
			</div>
		)
	}	
}


