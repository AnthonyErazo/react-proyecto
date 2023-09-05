import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './routes/NotFound/NotFound.jsx'
import Product from './routes/Product.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ModalProvider from './context/modal.jsx'
import CartProvider from './context/cart.jsx'
import Cart from './routes/Cart.jsx'
import ScrollTop from './components/ScrollTop/ScrollTop.jsx'
import ProductProvider from './context/product.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <ModalProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/categoria/:categoriaId' element={<App />} />
              <Route path='/categoria/accesorio/:subCategoriaId' element={<App />} />
              <Route path='/producto/:productoId' element={<Product />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
            <ScrollTop />
          </BrowserRouter>
        </ModalProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
)
