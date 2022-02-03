import React from 'react';
import { useAppSelector } from '../../app/hooks';
import ProductCard from './ProductCard';
import styles from './Product.module.css';

export default function ProductList() {
  const { products } = useAppSelector((store) => store.products);

  return (
    <div className={styles.list}>
      {products.map((o) => (
        <ProductCard key={o.id} product={o} />
      ))}
    </div>
  );
}
