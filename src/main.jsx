import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './routes/NotFound/NotFound.jsx'
import Category from './routes/Category.jsx'
import Product from './routes/Product.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/categoria/:categoriaId' element={<Category />} />
        <Route path='/categoria/accesorio/:subCategoriaId' element={<Category />} />
        <Route path='/producto/:productoId' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
