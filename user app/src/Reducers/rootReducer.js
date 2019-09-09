const initState = {
  users: []
};

const rootReducer = (state = initState, action) => {
  if (action === "ADD_USER") {
    console.log(state);
  }

  return state;
};

export default rootReducer;
