import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  photo: string;
  price: number;
  hasDiscount: boolean;
  discountPrice: number;
}

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    createProduct(state, action: PayloadAction<Product>) {
      const product = action.payload;
      product.id =
        state.products.length > 0
          ? Math.max.apply(
              null,
              state.products.map((o) => o.id)
            ) + 1
          : 1;
      state.products.push(product);
    },
  },
});

export const { createProduct } = productsSlice.actions;

export default productsSlice.reducer;
