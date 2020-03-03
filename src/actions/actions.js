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
      // console.log("RESPONSE IS", response);
      const action = getJWT(response.body);
      // console.log("action is", action);
      dispatch(action);
    })
    .catch(console.error);
};

// login should dispatch the JWT from the /login responsebody inside an action with type JWT.
