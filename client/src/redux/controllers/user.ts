import { decodeJWT } from "@/helpers/Decoded";
import { fileUpload } from "@/helpers/fileUpload";
import axios from "axios";
import Router from "next/router";
import { setPayments, SetProfile } from "../slices/profileSlice";
import { AppDispatch } from "../store/store";

export const getUser = (token: string) => async (dispatch: AppDispatch) => {
  let decoded = decodeJWT(token);
  let uid = decoded.uid;

  try {
    let resp = await axios.get(`http://localhost:3000/user/${uid}`);

    dispatch(SetProfile({ data: resp.data }));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser =
  (uid: string, value: object) => async (dispatch: AppDispatch) => {
    try {
      console.log(value);

      let resp = await axios.put(`http://localhost:3000/user/${uid}`, value);
      dispatch(SetProfile({ data: resp.data }));
    } catch (error) {
      console.log(error);
    }
  };

//
export const updateUserImage =
  (uid: string, token: string | null, image: any) =>
  async (dispatch: AppDispatch) => {
    try {
      const imageUrl = await fileUpload(image, "users"); //usar este path para el presset de cloudinary
      const res = await axios.put(`http://localhost:3000/user/${uid}`, {
        image: imageUrl,
      });

      dispatch(SetProfile({ data: res.data }));
    } catch (error) {
      console.log(error);
    }
  };

//

export const Payment = (value: any) => async (dispatch: AppDispatch) => {
  try {
    // const res: any = 
    axios
      .post("http://localhost:3000/payment/create-order", { value }).then(data=>
      // console.log(data.data)
       Router.push(`${data.data}`))
    // dispatch(setPayments(""))
   
    
    
  } catch (error) {}
};
