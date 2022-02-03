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
    const { name } = event.target;
    let value;
    if (event.target.type.toLowerCase() === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    if (name === 'price' || name === 'discountPrice') {
      value = Number(value);
    }

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
        hasDiscount: productForm.hasDiscount,
        discountPrice: productForm.hasDiscount
          ? productForm.discountPrice
          : undefined,
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
          name="price"
          id="price"
          value={productForm.price}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="hasDiscount"
          name="hasDiscount"
          checked={productForm.hasDiscount}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="hasDiscount">
          Есть скидка
        </label>
      </div>
      {productForm.hasDiscount && (
        <div className="mb-3">
          <label htmlFor="discountPrice" className="form-label">
            Цена по скидке
          </label>
          <input
            className="form-control"
            type="number"
            name="discountPrice"
            id="discountPrice"
            value={productForm.discountPrice}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
      </div>
    </form>
  );
}
