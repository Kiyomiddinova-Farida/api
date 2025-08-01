import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { API_ENDPOINTS } from '../../static/apiConfig';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const searchRef = useRef(null);
  const limit = 12;

  const { data, loading, error } = useApi(
    `${API_ENDPOINTS.products}?limit=${limit}&skip=${(currentPage - 1) * limit}&q=${searchTerm}`,
    [currentPage, searchTerm]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchRef.current.value);
    setCurrentPage(1);
  };

  const totalPages = data ? Math.ceil(data.total / limit) : 0;

  if (loading) return <LoadingSpinner text="Loading products..." />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🛍️ Products</h1>
        <p className="text-xl text-gray-600">Discover amazing products from our collection</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results info */}
      <div className="text-center text-gray-600">
        Showing {data?.products?.length || 0} of {data?.total || 0} products
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.products?.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-green-600">${product.price}</span>
                  {product.discountPercentage > 0 && (
                    <span className="ml-2 text-sm text-red-500 bg-red-100 px-2 py-1 rounded">
                      -{product.discountPercentage}%
                    </span>
                  )}
                </div>
                <div className="flex items-center text-yellow-500">
                  <span>⭐</span>
                  <span className="ml-1 text-gray-600">{product.rating}</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          
          <div className="flex space-x-1">
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;