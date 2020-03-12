export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_USERS":
      state = action.payload.map(user => {
        return { id: user.id, email: user.email };
      });
    default:
      return state;
  }
}
