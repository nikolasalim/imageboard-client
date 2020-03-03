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

// Sending a JWT

export const JWT = "JWT";
function getJWT(payload) {
  // console.log("payload in JWT up is", payload);
  return {
    type: JWT,
    payload
  };
}

export const login = (email, password) => dispatch => {
  const data = { email: email, password: password };
  // console.log("data in login is", data);
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = getJWT(response.body);
      // console.log("action in login func is", action);
      dispatch(action);
    })
    .catch(console.error);
};

export const SIGN_UP = "SIGN_UP";
function newUser(payload) {
  // console.log("payload in sign up is", payload);
  return {
    type: SIGN_UP,
    payload
  };
}

export const signup = (email, password) => dispatch => {
  const data = { email: email, password: password };
  console.log("data in signup is", data);
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      console.log("action in signup is", action);
      dispatch(action);
    })
    .catch(console.error);
};
