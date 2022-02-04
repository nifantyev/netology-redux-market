import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createProduct } from './productsSlice';

interface FormState {
  name: string;
  photo: string;
  price: number;
  hasDiscount: boolean;
  discountPrice: number;
}

const initialFormState: FormState = {
  name: '',
  photo: '',
  price: 0,
  hasDiscount: false,
  discountPrice: 0,
};

export default function ProductForm() {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<FormState>(initialFormState);

  const handleChange = (event: any) => {
    const { name } = event.target;
    let value: number | string = '';
    if (event.target.type.toLowerCase() === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    if (name === 'price' || name === 'discountPrice') {
      value = Number(value);
    }

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSave = (event: any) => {
    event.preventDefault();
    dispatch(
      createProduct({
        id: 0,
        name: form.name,
        photo: form.photo,
        price: form.price,
        hasDiscount: form.hasDiscount,
        discountPrice: form.hasDiscount ? form.discountPrice : form.price,
      })
    );
    setForm(initialFormState);
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
          value={form.name}
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
          value={form.photo}
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
          value={form.price}
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
          checked={form.hasDiscount}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="hasDiscount">
          Есть скидка
        </label>
      </div>
      {form.hasDiscount && (
        <div className="mb-3">
          <label htmlFor="discountPrice" className="form-label">
            Цена по скидке
          </label>
          <input
            className="form-control"
            type="number"
            name="discountPrice"
            id="discountPrice"
            value={form.discountPrice}
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
