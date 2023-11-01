import axios from "axios";
import { ClearAuth, SetAuth } from "../slices/authSlice";
import { AppDispatch } from "../store/store";
import { setCookie, deleteCookie } from "cookies-next";
import { getUser } from "./user";

export const postlogin = (values: any) => async (dispatch: AppDispatch) => {
  try {
    const resp = await axios.post("http://localhost:3000/login", values);
    let token = resp.data.token;
    setCookie("cookieToken", token);
    localStorage.setItem("token", token);

    dispatch(SetAuth({ auth: token, status: resp.status, autorized: true }));

    dispatch(getUser(token));
  } catch (err) {
    console.log(err);
  }
};

export const postRegister = (values: any) => async (dispatch: AppDispatch) => {
  try {
    await axios.post("http://localhost:3000/register", values);
  } catch (error) {
    console.log(error);
  }
};

export const clearSession = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ClearAuth());
  } catch (error) {
    console.log(error);
  }
};
