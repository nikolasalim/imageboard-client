export default function(state = "", action = {}) {
  switch (action.type) {
    case "JWT":
      console.log("action.payload is", action.payload);
      return action.payload;
    default:
      return state;
  }
}