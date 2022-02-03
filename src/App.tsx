import React from 'react';
import ProductForm from './features/products/ProductForm';
import ProductList from './features/products/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
          <ProductForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
