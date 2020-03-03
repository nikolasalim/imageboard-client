export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_IMAGES":
      state = action.payload;
    case "NEW_IMAGE":
      return [action.payload, ...state];
    default:
      return state;
  }
}
