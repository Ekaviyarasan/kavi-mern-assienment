export const initialTodoState = {
  todos: [],
  editIndex: null,
  editValue: ""
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload.trim()) return state;
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };

    case "EDIT_TODO":
      return {
        ...state,
        editIndex: action.payload,
        editValue: state.todos[action.payload]
      };

    case "SET_EDIT_VALUE":
      return {
        ...state,
        editValue: action.payload
      };

    case "UPDATE_TODO":
      const updatedTodos = [...state.todos];
      updatedTodos[state.editIndex] = state.editValue;

      return {
        ...state,
        todos: updatedTodos,
        editIndex: null,
        editValue: ""
      };

    case "CANCEL_EDIT":
      return {
        ...state,
        editIndex: null,
        editValue: ""
      };

    default:
      return state;
  }
}