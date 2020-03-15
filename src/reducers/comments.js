export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_COMMENTS":
      return action.payload;
    case "NEW_COMMENT":
      const newState = [action.payload, ...state];
      return newState;
    default:
      return state;
  }
}

// case "DELETE_IMAGE":
//   return state.filter(image => image.id !== action.payload.id);
// case "EDIT_IMAGE":
//   const updatedState = state.map(image => {
//     if (image.id === action.payload.id) {
//       return action.payload;
//     }
//     return image;
//   });
//   return updatedState;
