import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Images: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    default: "",
  },
});

export const Job = mongoose.model("Job", jobSchema);
