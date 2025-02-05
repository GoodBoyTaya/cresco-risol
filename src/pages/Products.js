import React from 'react';
import Navbar from '../components/navbar/navbar';

function Products() {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1>Products Page</h1>
            <small className="text-muted">Check out our amazing products!</small>
        </div>
    </div>
  );
}

export default Products;