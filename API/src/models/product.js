import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    default: "",
  },
  dimensions: {
    type: String,
    default: "",
  },
  material: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
});

export const Product = mongoose.model("Product", productSchema);
