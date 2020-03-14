export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_IMAGES":
      return action.payload;
    case "USER_IMAGES":
      return action.payload;
    case "NEW_IMAGE":
      console.log("action test", action);
      console.log("state test", state);
      const newState = [action.payload, ...state];
      console.log("newState test:", newState);
      return newState;
    // return [action.payload, ...state];
    case "DELETE_IMAGE":
      return state.filter(image => image.id !== action.payload.id);
    case "EDIT_IMAGE":
      const updatedState = state.map(image => {
        if (image.id === action.payload.id) {
          return action.payload;
        }
        return image;
      });
      return updatedState;
    default:
      return state;
  }
}

// consider turning the array into an object with two props
// or add multiple reducers (one for all images, one for user_images)
