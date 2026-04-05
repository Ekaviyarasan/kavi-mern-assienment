export const initialFormState = {
  name: "",
  email: "",
  password: ""
};

export function FormReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };

    case "RESET_FORM":
      return initialFormState;

    default:
      return state;
  }
}