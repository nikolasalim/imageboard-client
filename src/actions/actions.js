import request from "superagent";

export const ALL_IMAGES = "ALL_IMAGES";
// const baseUrl = "http://localhost:4000";
const baseUrl = "https://pacific-beach-63955.herokuapp.com";

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;
  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

// Creating new images

export const NEW_IMAGE = "NEW_IMAGE";
function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/image`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Editing new images

export const EDIT_IMAGE = "EDIT_IMAGE";
function editingImage(payload) {
  return {
    type: EDIT_IMAGE,
    payload
  };
}

export const editImage = (data, id) => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .put(`${baseUrl}/image/${id}`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = editingImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Deleting an specific image from que database

export const DELETE_IMAGE = "DELETE_IMAGE";
function deletingImage(payload) {
  return {
    type: DELETE_IMAGE,
    payload
  };
}

export const deleteImage = (deletedImage, id) => (dispatch, getState) => {
  request
    .delete(`${baseUrl}/image/${id}`)
    .send(deletedImage)
    .then(response => {
      const action = deletingImage(response.body);
      console.log("response body in action is:", response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Sending a JWT

export const JWT = "JWT";
function getJWT(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (email, password) => dispatch => {
  const data = { email: email, password: password };
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = getJWT(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const SIGN_UP = "SIGN_UP";
function newUser(payload) {
  return {
    type: SIGN_UP,
    payload
  };
}

export const signup = (email, password) => dispatch => {
  const data = { email: email, password: password };
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Listing all users

export const GET_USERS = "GET_USERS";
function allUsers(payload) {
  return {
    type: GET_USERS,
    payload
  };
}

export const getUsers = () => (dispatch, getState) => {
  // const state = getState();
  // const { usersList } = state;
  request(`${baseUrl}/user`)
    .then(response => {
      const action = allUsers(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Getting images from specific users

export const USER_IMAGES = "USER_IMAGES";
function userImages(payload) {
  return {
    type: USER_IMAGES,
    payload
  };
}

export const getUserImages = userId => (dispatch, getState) => {
  // const state = getState();
  // console.log("jwt is", state.user.jwt);
  // const { jwt } = state.user;

  request(`${baseUrl}/image/${userId}`)
    .then(response => {
      const action = userImages(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Creating a new comment

export const NEW_COMMENT = "NEW_COMMENT";

function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload
  };
}

export const createComment = (comment, imageId) => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  const data = { comment: comment, imageId: imageId };

  request
    .post(`${baseUrl}/comment`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newComment(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Reading all comments

export const GET_COMMENTS = "GET_COMMENTS";

function gettingComments(payload) {
  return {
    type: GET_COMMENTS,
    payload
  };
}

export const getComments = () => (dispatch, getState) => {
  request(`${baseUrl}/comment`)
    .then(response => {
      const action = gettingComments(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
