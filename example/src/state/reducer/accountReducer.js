
const initialState = {
    state: "Hello"
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch":
      return {...state, state: action.payload}
    default:
  }
  return state
};

export default accountReducer