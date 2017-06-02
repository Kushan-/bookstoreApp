
import ReactDOM from 'react-dom';
import React from 'react';


console.log("App startes");

import BookStore from './components/BookStore.jsx';





ReactDOM.render(<BookStore />, document.getElementById('root')); 







/*
class App extends React.Component{

	componentWillMount(){
		console.log("Mounting Component");
	}

	componentDidMount(){
		$.ajax({
			url: 'http://openlibrary.org/recentchanges.json?limit=10',
			context: this,
			dataType: 'json',
			type: 'GET'
			}).done(function (data) {
				var changeSets = this.mapOpenLibraryDataToChangeSet(data);
				this.setState({changeSets: changeSets});
		});
		console.log("Mounting Did Component");
	}
	constructor(props){
		super(props);
		this.state = {
			status : true,
		};
		
	}

	toggleState(e){
		console.log(e);
		this.setState({status: !this.state.status})
		console.log(this.state);
	}

	getDefaultProps(){
		return{name : "kush"};
	}

	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps");
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log("shouldComponentUpdate");
		console.log(nextProps);
		console.log(nextState);
		return(nextState);
	}

	componentWillUpdate(){
		console.log('componentWillUpdate')
	}

	render(){
		console.log("render");
		
		console.log(this.state);
		console.log(this.state.status);
		return(
			<h1 onClick={this.toggleState.bind(this)}>
			{this.state.status.toString()}
			</h1>
		)
	}

	componentWillUnmount(){
		console.log('componentWillUnmount')
	}

	
}

ReactDOM.render(<App name = "kush"/>, document.getElementById('saas_body'))

*/



//states // not working probably ES6

// class App extends React.Component {

// 	constructor() {
// 		super();
// 		this.state = {
// 			changeSets: []
// 		}
// 	}
// 	render(){
// 		console.log(this.state.changeSets); // prints []
// 	};

// }

// ReactDOM.render(<App/>, document.getElementById('saas_body'));








/*import Header from'./components/header.jsx';
import Home from './components/body/home.jsx';
import Go from './components/body/searchResult/go.jsx'

*/

/*var data = [{ "when": "2 minutes ago",
"who": "Jill Dupre",
"description": "Created new account"
},
{
"when": "1 hour ago",
"who": "Lose White",
"description": "Added fist chapter"
},
{
"when": "2 hours ago",
"who": "Jordan Whash",
"description": "Created new account"
}];

var headings = ['When', 'Who', 'Description']

class Heading extends React.Component{
	render(){
			console.log("Heading")
			console.log(this.props.heading);
			console.log("********")
		return(
			
			<th>{this.props.heading}</th>
		)
		
	}

};

class Headings extends React.Component{
	render(){
			console.log("After app")
			var headings = this.props.headings.map(function(name, index) {
				console.log("name = " + name);
				
				console.log("=====Heading=======");
				
				return <Heading key={index} headings = {name}/>;
				
			});
		return(
			<thead><tr>{headings}</tr></thead>
		)
	}
}

class Row extends React.Component{
	render(){
		console.log(this.props.changeSet);
		console.log("rows")
		return(
			
			<tr>
				<td>
					{this.props.changeSet.when}
				</td>
				<td>
					{this.props.changeSet.who}
				</td>
				<td>
					{this.props.changeSet.description}
				</td>
			</tr>
		)
	}
}

class Rows extends React.Component{
	render(){
		var rows = this.props.changeSets.map(function(changeSet, index) {
			console.log(index, changeSet);
			return(<Row key={index} changeSet = {changeSet}/>);
		});
		console.log("Rows")
		return(
			<tbody>{rows}</tbody>
		)
	}
}

class App extends React.Component {


/*propType(){
	headings : React.PropTypes.array,
	changeSets : React.PropTypes.array,
	author : React.propTypes.string.isRequired;

}*/
/*
render(){
	console.log("App");
	console.log(headings)
	console.log(this.props.headings);
	
	console.log(this.props.changeSet);
	console.log("---");
	return(

	)


	return(
		<table className = 'table'>
			<Headings headings = {this.props.headings} />
			<Rows changeSets = {this.props.changeSets} />
		</table>
	)	
}



};

ReactDOM.render(<App headings = {headings} changeSets = {data}/>, document.getElementById('saas_body'));*/






/*
   render() {
	console.log(this.props);
	var headings = this.props.head.map(function(heading){
		return(<th>
			{heading}
			</th>);
		});
	var rows = this.props.dat.map(function(row){
		return <tr>
			<td>{row.when}</td>
			<td>{row.who}</td>
			<td>{row.description}</td>
			</tr>
	})
	return(<div>
		<h1>{this.props.title}</h1><table>
			<thead>
				{headings}
			</thead>
				{rows}
			</table>
		</div>) 
}

};	
	
   
var title = "Recent changges"
*/

export default BookStore;