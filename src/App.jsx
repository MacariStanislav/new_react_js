import React from 'react';
import { Route, Routes } from 'react-router-dom';  
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductList from './components/Product/ProductList';
import ProductDetails from './components/Product/ProductDetails';
import Cart from './components/catalog/Cart';
import './styles/css/App.css'

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          {/* Главная страница с каталогом товаров */}
          <Route path="/" element={<ProductList />} />

          {/* Страница с деталями товара */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Страница корзины */}
          <Route path="/cart" element={<Cart />} />
          
          {/* Страница по умолчанию или 404 */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
