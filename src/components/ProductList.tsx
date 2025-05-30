// src/components/ProductList.tsx
import React from 'react';

import styles from './ProductList.module.css'; // Import the CSS Module

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className={styles.productListContainer}> {/* Optional wrapper */}
      <ul className={styles.productList}> {/* Apply style to the UL */}
        {products.map(product => (
          <li 
            key={product.id} // Essential: Use the stable, unique product.id as the key
            className={styles.productListItem} // Apply style to each LI
          >
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productCategory}>Category: {product.category}</p>
            <p className={styles.productPrice}>Price: ${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
