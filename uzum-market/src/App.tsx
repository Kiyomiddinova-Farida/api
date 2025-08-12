import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/ProductView';
import HomePage from './pages/home';
import WishlistPage from './pages/wishlist';
import CartPage from './pages/cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
