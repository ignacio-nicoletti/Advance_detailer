import axios from "axios";
export const fileUpload = async (image: any, path: string) => {
  try {
    const formData = new FormData();

    formData.append("file", image);
    // formData.append('upload_preset', `upload-${path}`)
    formData.append("upload_preset", `advancedetailer-${path}`);


    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dbu2biawj/upload",
      formData
    );
    return res.data.secure_url;
  } catch (error) {
    throw error;
  }
};
