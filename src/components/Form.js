import React from 'react';

class Form extends React.Component {
	constructor(props) {
        console.log('Form Constructor');

		super(props);
		this.state = {
			value: ''
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleNewTodoAddition = this.handleNewTodoAddition.bind(this);
	}
	
	handleChange(event) {
        console.log('Form Handle change');

		this.setState({
			value: event.target.value
		});
	}
	
	handleNewTodoAddition() {
        console.log('Form Handle New Addition');

		if(this.input.value !== '') {
			this.props.addTodo(this.input.value);
			this.setState({
				value: ''
			});
			this.input.placeholder = "Add games to your pile here...";
		}
    }

	render() {
		return (
			// ref should be passed a callback
			// with underlying dom element as its
			// argument to get its reference 
			<div id="form" className="ui segment">
				<form 
					className="ui form"
					style={{display: 'flex'}}>
					<input 
						ref={node => {
							this.input = node;
						}}
						className="field"
						value={this.state.value}
						placeholder="Add games to your pile here..."
						autoComplete="off"
						onChange={this.handleChange}
					/>
					<button 
						className="ui button"
						type="button"
						style={{marginLeft: '1%'}}
						onClick={this.handleNewTodoAddition}
					>	
						+
					</button>
				</form>
			</div>
		);
	}
}

export default Form;