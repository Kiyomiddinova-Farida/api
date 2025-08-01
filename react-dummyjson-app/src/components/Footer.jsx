import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">🚀</span>
              DummyJSON Explorer
            </h3>
            <p className="text-gray-300 text-sm">
              Explore the amazing world of dummy data with our beautiful and modern interface.
              Built with React, Vite, and Tailwind CSS.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/recipes" className="hover:text-white transition-colors">Recipes</a></li>
              <li><a href="/users" className="hover:text-white transition-colors">Users</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">API Information</h3>
            <p className="text-gray-300 text-sm">
              Powered by{' '}
              <a 
                href="https://dummyjson.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                DummyJSON API
              </a>
            </p>
            <p className="text-gray-400 text-xs mt-2">
              © 2024 DummyJSON Explorer. Made with ❤️
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>Built for educational and demonstration purposes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;