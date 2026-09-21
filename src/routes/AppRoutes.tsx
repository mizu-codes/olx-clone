import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Wishlist from '../pages/Wishlist/Wishlist'
import SellProduct from '../pages/SellProduct/SellProduct';
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
   return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/my-ads" element={<MyAds />} /> */}
      </Route>

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/sell" element={<SellProduct />} />
    </Routes>
  );
}

export default AppRoutes