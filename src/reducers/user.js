export default function(state = "", action = {}) {
  switch (action.type) {
    case "JWT":
      return action.payload;
    case "SIGN_UP":
      return action.payload;
    default:
      return state;
  }
}
