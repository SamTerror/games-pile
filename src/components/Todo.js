import React from 'react';

const Todo = ({todo, remove}) => {
	// single todo 
	return (
		<p className="todos">
			{todo.value}

			<button 
				className="ui button"
				style={{marginLeft: '1%'}}
				onClick={()=> {
					remove(todo.id)
				}}
			>	
				X
			</button>


			
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