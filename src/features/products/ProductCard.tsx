import React from 'react';
import discountLabel from './discount.svg';
import styles from './Product.module.css';
import { Product } from './productsSlice';

type ProductCardProps = {
  product: Product;
};

function getCurrencySymbol(locale: string, currency: string) {
  return (0)
    .toLocaleString(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();
}

function formatCurrency(
  amount: number,
  locale: string,
  currency: string,
  fractionDigits: number,
  removeSymbol: boolean
) {
  let result = amount
    .toLocaleString(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    })
    .trim();
  if (removeSymbol) {
    result = result.replace(getCurrencySymbol(locale, currency), '');
  }
  return result.trim();
}

export default function ProductCard(props: ProductCardProps) {
  const { name, photo, price, hasDiscount, discountPrice } = props.product;
  const locale = 'ru-RU';
  const currency = 'RUB';

  const discountPct =
    hasDiscount && discountPrice
      ? Math.round((100 * (price - discountPrice)) / price)
      : undefined;

  const maxNameLength = 25;

  const displayName =
    name.length > maxNameLength
      ? name.substring(0, maxNameLength) + '...'
      : name;

  return (
    <div className={styles.card}>
      <img className={styles.card__photo} src={photo} alt={name} />
      <div className={styles.price}>
        <div className={styles.price__number}>
          {formatCurrency(discountPrice || price, locale, currency, 0, true)}
        </div>
        <div className={styles.price__currency}>
          {getCurrencySymbol(locale, currency)}
        </div>
        {hasDiscount && discountPrice && (
          <div className={styles.discounted}>
            {formatCurrency(price, locale, currency, 0, false)}
          </div>
        )}
      </div>
      <a className={styles.card__name} href="#/">
        {displayName}
      </a>
      {discountPct && (
        <div className={styles.label}>
          <img className={styles.label__image} src={discountLabel} alt="" />
          <div className={styles.label__text}>{discountPct}%</div>
        </div>
      )}
    </div>
  );
}
