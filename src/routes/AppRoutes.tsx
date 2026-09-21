import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Wishlist from '../pages/Wishlist/Wishlist'
import SellProduct from '../pages/SellProduct/SellProduct'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/sell" element={<SellProduct />} />
    </Routes>
  )
}

export default AppRoutes