import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  createProduct,
  updateProductForm,
  clearProductForm,
} from './productsSlice';

export default function ProductForm() {
  const dispatch = useAppDispatch();
  const { productForm } = useAppSelector((store) => store.products);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(
      updateProductForm({
        name,
        value,
      })
    );
  };

  const handleSave = (event: any) => {
    event.preventDefault();
    dispatch(
      createProduct({
        id: 0,
        name: productForm.name,
        photo: productForm.photo,
        price: productForm.price,
        discount: productForm.discount,
      })
    );
    dispatch(clearProductForm());
  };

  return (
    <form onSubmit={handleSave}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Название
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={productForm.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="photo" className="form-label">
          Фото (ссылка)
        </label>
        <input
          className="form-control"
          type="text"
          name="photo"
          id="photo"
          value={productForm.photo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Цена
        </label>
        <input
          className="form-control"
          type="number"
          min="0"
          step="0.01"
          name="price"
          id="price"
          value={productForm.price}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="discount" className="form-label">
          Скидка (%)
        </label>
        <input
          className="form-control"
          type="number"
          min="0"
          max="100"
          step="1"
          name="discount"
          id="discount"
          value={productForm.discount}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
      </div>
    </form>
  );
}
