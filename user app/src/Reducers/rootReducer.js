const initState = {
  Users: []
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_USER") {
    console.log("Adding User");
    let new_users = [...state.Users, action.user];
    state.Users = new_users;
  }
  console.log(state);
  return state;
};

export default rootReducer;
