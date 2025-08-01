import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ProductDetail from './pages/products/ProductDetail';
import Recipes from './pages/recipes/Recipes';
import RecipeDetail from './pages/recipes/RecipeDetail';
import Users from './pages/users/Users';
import UserDetail from './pages/users/UserDetail';
import Login from './pages/login/Login';
import ErrorPage from './pages/error/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="recipes/:id" element={<RecipeDetail />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
