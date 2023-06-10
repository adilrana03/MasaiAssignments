//Write the ActionCreator functions here
import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
const loginSucess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};
//Write the ActionCreator functions here
const getLoginData = (payload) => (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post(`https://reqres.in/api/login`, payload)
    .then((res) => dispatch(loginSucess(res.data.token)))
    .catch(() => dispatch(loginFailure));
};


export { getLoginData };