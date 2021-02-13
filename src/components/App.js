import React from 'react';

import Header from './Header';
import Form from './Form';
import List from './List';
import Footer from './Footer';

class App extends React.Component {
	constructor(props) {
        console.log('Container Constructor');

		super(props);
		// data for introduction to app
		// for new users
		const introData = [
			{
				id: -3, 
				value: "Hi! This is a simple todo list app made by REACT <3"
			},
			{
				id: -2,
				value: "Hover over todos and click on `X` to delete them!"
			},
			{
				id: -1,
				value: "Add new todos and come back any time later, I will save them for you!"
			}
		];
		
		const localData = localStorage.todos && JSON.parse(localStorage.todos);

		this.state = { 
			data: localData || introData
		};
		
		// binding methods
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	updateLocalStorage() {
        //console.log('Container Update localstorage');

		if (typeof(Storage) !== "undefined")
			localStorage.todos = JSON.stringify(this.state.data);
			localStorage.count = localStorage.count;

		localStorage.setItem('count', localStorage.count);
		console.log(localStorage);
	}
	// Handler to add todo
	addTodo(val) {
        console.log('Container addtodo');

		let id;
		let lastId;
		// if localStorage is available then increase localStorage count
		// else use global window object's id variable
		if (typeof(Storage) !== "undefined") {
			console.log(localStorage.count);
			lastId = Number(localStorage.count);
			id = lastId + 1;
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}
		
		const todo = { 
			value: val, 
			id: id 
		};
		
		this.state.data.push(todo);
		// update state
		this.setState({
			data: this.state.data
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	// Handler to remove todo
	removeTodo(id) {
        console.log('Container Remove todo');

		// Filter out the todo that has to be removed
		const list = this.state.data.filter(todo => {
			if (todo.id !== id)
				return todo;
		});
		// Update state
		this.setState({
			data: list
		}, () => {
			// Update localStorage
			this.updateLocalStorage();
		});
	}
	
	componentDidMount() {
        console.log('App componentDidMount');

        // Get values from localstorage if available
		//localStorage.clear();
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.todos) {
				localStorage.todos = JSON.stringify(this.state.data);
			}
			if(!localStorage.getItem('count')) {
				console.log('trouve rien, reinitialise');
				localStorage.count = 0;
			}
		} else {
			 console.log("%cApp will not remember todos created as LocalStorage Is Not Available",
							 "color: hotpink; background: #333; font-size: x-large;font-family: Courier;");
			window.id = 0;
		}
		// Use to reset count
		//localStorage.setItem('count', 0);

		console.log(localStorage);
	}
	
	render() {
		return (
			<div id="container" style={{padding: '1%'}}>
				<Header />
				<Form addTodo={this.addTodo} />
				<List todos={this.state.data} remove={this.removeTodo} />
				<Footer />
			</div>
		);
	}
}

/*const App = () => {
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <Header />
            <SearchBar />
        </div>
    );
};*/

export default App;