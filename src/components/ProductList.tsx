// src/components/ProductList.tsx
import React from 'react';

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
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {products.map(product => (
        <li 
          key={product.id} // <-- Essential: Use the stable, unique product.id as the key
          style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px' }}
        >
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
