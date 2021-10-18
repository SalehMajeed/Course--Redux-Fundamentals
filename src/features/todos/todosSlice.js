const initialState = [];

function nextTodoId(todos) {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
	return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
	switch (action.type) {
		case 'todos/todosLoaded': {
			return action.payload;
		}
		case 'todos/todoAdded': {
			return [
				...state,
				{
					id: nextTodoId(state),
					text: action.payload,
					completed: false,
				},
			];
		}
		case 'todos/todoToggled': {
			return state.map(todo => {
				if (todo.id !== action.payload) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed,
				};
			});
		}
		case 'todos/todosLoaded': {
			return action.payload;
		}
		default:
			return state;
	}
}

export async function fetchTodos(dispatch, getState) {
	const res = await fetch('https://fakestoreapi.com/products');
	const data = await res.json();
	dispatch({ type: 'todos/todosLoaded', payload: data.title });
}
