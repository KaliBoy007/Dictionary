export default (state = {}, action) => {
  switch (action.type) {
    case "DEFINITIONS":
      return action.payload;
    case "ERROR":
      return action.payload;
    default:
      return state;
  }
};
