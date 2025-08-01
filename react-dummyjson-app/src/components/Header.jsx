import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/products', label: 'Products', icon: '🛍️' },
    { path: '/recipes', label: 'Recipes', icon: '🍽️' },
    { path: '/users', label: 'Users', icon: '👥' },
  ];

  return (
    <header className="bg-white shadow-lg border-b-2 border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <h1 className="text-2xl font-bold text-gray-800">DummyJSON Explorer</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </Link>
        </div>

        {/* Mobile navigation */}
        <nav className="md:hidden mt-4 flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <span>{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;