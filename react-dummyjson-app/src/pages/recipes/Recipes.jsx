import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { API_ENDPOINTS } from '../../static/apiConfig';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const searchRef = useRef(null);
  const limit = 12;

  const { data, loading, error } = useApi(
    `${API_ENDPOINTS.recipes}?limit=${limit}&skip=${(currentPage - 1) * limit}&q=${searchTerm}`,
    [currentPage, searchTerm]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchRef.current.value);
    setCurrentPage(1);
  };

  const totalPages = data ? Math.ceil(data.total / limit) : 0;

  if (loading) return <LoadingSpinner text="Loading recipes..." />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🍽️ Recipes</h1>
        <p className="text-xl text-gray-600">Discover delicious recipes from around the world</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search recipes..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results info */}
      <div className="text-center text-gray-600">
        Showing {data?.recipes?.length || 0} of {data?.total || 0} recipes
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.recipes?.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{recipe.name}</h3>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    ⏱️ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                  </span>
                  <span className="flex items-center">
                    👥 {recipe.servings}
                  </span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <span>⭐</span>
                  <span className="ml-1 text-gray-600">{recipe.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  recipe.difficulty === 'Easy' 
                    ? 'bg-green-100 text-green-800'
                    : recipe.difficulty === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {recipe.difficulty}
                </span>
                <div className="flex flex-wrap gap-1">
                  {recipe.tags?.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
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
                      ? 'bg-green-600 text-white'
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

export default Recipes;