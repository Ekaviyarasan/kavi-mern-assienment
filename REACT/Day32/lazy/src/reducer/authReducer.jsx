export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload, isLoggedIn: true };
    case "LOGOUT":
      return { user: null, isLoggedIn: false };
    default:
      return state;
  }
};