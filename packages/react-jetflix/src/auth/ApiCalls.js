import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:2005/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const verifyEmail = async (email) => {
  const data = { email };
  try {
    return await axios.post("http://localhost:2005/api/auth/verify", data);
  } catch (error) {
    console.log(error);
  }
};