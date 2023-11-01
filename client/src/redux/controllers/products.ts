import axios from "axios";
import {
  SetProduct,
  SetProductStore,
  SetUpdateProductStore,
} from "../slices/productSlice";
import { AppDispatch } from "../store/store";

export const getProduct = () => async (dispatch: AppDispatch) => {
  try {
    const resp = await axios.get("http://localhost:3000/product");
    dispatch(
      SetProduct({ products: resp.data.products, status: resp.data.status })
    );
  } catch (error: any) {
    dispatch(SetProduct({ products: [], status: error.response.status }));
  }
};

export const ProductStore =
  (
    id: string,
    count: number,
    price: number,
    title: string,
    brand: string,
    description: string,
    material: string,
    dimensions: string,
    image:string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(
        SetProductStore({
          productsStore: {
            id: id,
            count: count,
            price,
            title: title,
            brand: brand,
            description: description,
            material: material,
            dimensions,
            image
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

export const updateStoreWhenRemove =
  (UpdateStore: object[]) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetUpdateProductStore(UpdateStore));
    } catch (error) {
      console.log(error);
    }
  };
