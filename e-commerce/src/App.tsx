import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomePage from './pages/home'
import AboutPage from './pages/layout/About'
import DeliveryPage from './pages/layout/Delivery'
import ReturnsPage from './pages/layout/Returns'
import WarrantyPage from './pages/layout/Warranty'
import ContactsPage from './pages/layout/Contacts'
import BlogPage from './pages/layout/Blog'
import FavoritesPage from './pages/layout/Favorites'
import ComparePage from './pages/layout/Compare'
import CartPage from './pages/layout/Cart'
import ProductPage from './pages/product'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/warranty" element={<WarrantyPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path=":slug" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
