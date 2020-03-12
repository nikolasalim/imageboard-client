export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_IMAGES":
      state = action.payload;
    case "USER_IMAGES":
      state = action.payload;
    case "NEW_IMAGE":
      return [action.payload, ...state];
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
