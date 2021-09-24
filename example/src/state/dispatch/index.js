export const fetchAPI = (action) => {
  return (dispatch) => (dispatch({
    type: "fetch",
    payload: action
  }))
};