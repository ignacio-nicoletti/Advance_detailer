import axios from "axios";
import { SetJobs } from "../slices/jobSlice";
import { AppDispatch } from "../store/store";

export const getJobs = () => async (dispatch: AppDispatch) => {
  
    try {
      let resp = await axios.get(`http://localhost:3000/job`);
 
  
      dispatch(SetJobs({ data: resp.data.job }));
    } catch (error) {
      console.log(error);
    }
  };