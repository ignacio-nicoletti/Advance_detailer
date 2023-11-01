import { createSlice } from "@reduxjs/toolkit";

export interface Products {
  products: any;
  productsStore: any;
  status: Number;
 
}

const initialState: Products = {
  products: [],
  productsStore: [],
  status: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    SetProduct: (state, action) => {
      state.products = action.payload.products;
      state.status = action.payload.status;
    },
    SetProductStore: (state, action) => {
      const existingProduct = state.productsStore.find(
        (el: any) => el.id === action.payload.productsStore.id
      );

      if (existingProduct) {
        // Si el producto existe, se actualiza la propiedad count
        const updatedProduct = {
          ...existingProduct,
          count: existingProduct.count + action.payload.productsStore.count,
        };

        const updatedProductStore = state.productsStore.map((product: any) =>
          product.id === action.payload.productsStore.id
            ? updatedProduct
            : product
        );

        state.productsStore = updatedProductStore;
      } else {
        state.productsStore = [
          ...state.productsStore,
          action.payload.productsStore,
        ];
      }
    },

    SetUpdateProductStore: (state, action) => {
      state.productsStore = action.payload;
    },

    
  },
});

// Action creators are generated for each case reducer function
export const {
  SetProduct,
  SetProductStore,
  SetUpdateProductStore,
} = productSlice.actions;

export default productSlice.reducer;
