export default function(state = "", action = {}) {
  switch (action.type) {
    case "JWT":
      console.log("action.payload is", action.payload);
      return action.payload;
    case "SIGN_UP":
      return action.payload;
    default:
      return state;
  }
}
