import React from 'react';
import Todo from './Todo';

const List = ({todos, remove}) => {
	let allTodos = [];
	
	if(todos.length > 0) {
		allTodos = todos.map(todo => {
			// passing todo and remove method reference
			return (<Todo todo={todo} remove={remove} />);
			//return (<p>{todo.value}</p>);
		});
	} else {
		allTodos.push(<h3 id="acu">All caught up !</h3>);	
	}
	
	return (
		<div id="list">
			<h4 id="info" style={{textAlign: 'center'}}> Your Todos: </h4>
			{allTodos}
		</div>
	);
};

export default List;