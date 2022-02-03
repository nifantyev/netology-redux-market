import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  photo: string;
  price: number;
  hasDiscount: boolean;
  discountPrice?: number;
}

export interface ProductsState {
  products: Product[];
  productForm: {
    name: string;
    photo: string;
    price: number;
    hasDiscount: boolean;
    discountPrice?: number;
  };
}

const initialState: ProductsState = {
  products: [],
  productForm: {
    name: '',
    photo: '',
    price: 0,
    hasDiscount: false,
    discountPrice: undefined,
  },
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
    updateProductForm(
      state,
      action: PayloadAction<{ name: string; value: string | number }>
    ) {
      const { name, value } = action.payload;
      state.productForm = { ...state.productForm, [name]: value };
    },
    clearProductForm(state) {
      state.productForm.name = '';
      state.productForm.photo = '';
      state.productForm.price = 0;
      state.productForm.hasDiscount = false;
      state.productForm.discountPrice = undefined;
    },
  },
});

export const { createProduct, updateProductForm, clearProductForm } =
  productsSlice.actions;

export default productsSlice.reducer;
