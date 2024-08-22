// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
// components
import Navbar from './assets/components/navbar'
import Home from './assets/pages/Home'
import Product from './assets/pages/Product'
import DetailProduk from './assets/pages/DetailProduk'
import CheckoutPage from './assets/pages/Checkout'
import Blog from './assets/pages/Blog'
import DetailBlog from './assets/pages/DetailBlog'
import Contact from './assets/pages/Contact'
import Footer from './assets/components/footer' 


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/detailProudct' element={<DetailProduk />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/detail-blog' element={<DetailBlog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App