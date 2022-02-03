import React from 'react';
import ProductForm from './features/products/ProductForm';
import ProductCard from './features/products/ProductCard';
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
          <div className="products">
            <div className="product">
              <ProductCard
                product={{
                  id: 1,
                  name: 'Ирригатор B.Well WI-911',
                  photo:
                    'https://unsplash.com/photos/6p1FKTwnkgA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzODc5OTQ1&force=true&w=640',
                  price: 2770,
                  hasDiscount: true,
                  discountPrice: 2019,
                }}
              />
            </div>
            <div className="product">
              <ProductCard
                product={{
                  id: 2,
                  name: 'Конструктор LEGO Hidden Side Effects',
                  photo:
                    'https://images.unsplash.com/photo-1643815113664-4969898e1b3c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640',
                  price: 5966,
                  hasDiscount: true,
                  discountPrice: 5690,
                }}
              />
            </div>
            <div className="product">
              <ProductCard
                product={{
                  id: 3,
                  name: 'Ирригатор B.Well WI-912',
                  photo:
                    'https://images.unsplash.com/photo-1643815113664-4969898e1b3c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640',
                  price: 2719,
                  hasDiscount: false,
                }}
              />
            </div>
            <div className="product">
              <ProductCard
                product={{
                  id: 4,
                  name: 'Ирригатор B.Well WI-911 с какой-то фигней',
                  photo:
                    'https://images.unsplash.com/photo-1643815113664-4969898e1b3c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640',
                  price: 2689,
                  hasDiscount: false,
                }}
              />
            </div>
            <div className="product">
              <ProductCard
                product={{
                  id: 5,
                  name: 'Конструктор LEGO City 60228 blah blah',
                  photo:
                    'https://images.unsplash.com/photo-1643815113664-4969898e1b3c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640',
                  price: 4795,
                  hasDiscount: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// https://unsplash.com/photos/6p1FKTwnkgA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzODc5OTQ1&force=true&w=640
