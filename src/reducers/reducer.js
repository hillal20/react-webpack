const initState = {
  x: "something"
};

const firstReducer = (state = initState, action) => {
  console.log("action ===> ", action);
  return state;
};

export default firstReducer;
