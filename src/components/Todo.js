import React from 'react';

const Todo = ({todo, remove}) => {
	// single todo 
	return (
		<p className="todos">
			{todo.value}
			<span 
				className="removeBtn"
				onClick={()=> {
					remove(todo.id)
				}}>
				 [ X ]
			</span>
		</p>
	);
};

export default Todo;