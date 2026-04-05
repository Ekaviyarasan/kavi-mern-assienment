export const initialState = { count: 0 };

export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "INCREMENT_BY_VALUE":
      return { count: state.count + action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}