import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import Products from "./Pages/Products/Products";
import ProductSingle from "./Pages/ProductSingle/ProductSingle";

function AuthenticatedApp() {
  return (
    <>
      <nav>
        <ul>
          <li></li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductSingle />} />
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
