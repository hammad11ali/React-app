const initState = {
  Users: [
    {
      user_name: "1",
      user_email: "1@1",
      user_passw: "1",
      confirm_pass: "1",
      id: 0
    }
  ],
  currentId: -1
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_USER") {
    console.log("Adding User");
    let new_users = [...state.Users, action.user];
    return {
      ...state,
      Users: new_users
    };
  }

  if (action.type == "LOGIN") {
    console.log("Logging In");
    let new_id = action.id;
    return {
      ...state,
      currentId: new_id
    };
  }
  return state;
};

export default rootReducer;
