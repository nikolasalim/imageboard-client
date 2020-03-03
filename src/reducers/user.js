export default function(state = "", action = {}) {
  switch (action.type) {
    case "JWT":
      console.log("action.payload in JWT is", action.payload);
      return action.payload;
    case "SIGN_UP":
      console.log("action.payload in SIGN UP is", action.payload);
      return action.payload;
    default:
      return state;
  }
}
