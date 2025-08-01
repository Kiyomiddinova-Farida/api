import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { API_ENDPOINTS } from '../../static/apiConfig';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const Home = () => {
  const { data: products, loading: productsLoading, error: productsError } = useApi(`${API_ENDPOINTS.products}?limit=6`);
  const { data: recipes, loading: recipesLoading, error: recipesError } = useApi(`${API_ENDPOINTS.recipes}?limit=6`);
  const { data: users, loading: usersLoading, error: usersError } = useApi(`${API_ENDPOINTS.users}?limit=6`);

  const categories = [
    {
      title: 'Products',
      icon: '🛍️',
      description: 'Explore our wide range of products',
      link: '/products',
      data: products?.products,
      loading: productsLoading,
      error: productsError,
      color: 'blue'
    },
    {
      title: 'Recipes',
      icon: '🍽️',
      description: 'Discover delicious recipes',
      link: '/recipes',
      data: recipes?.recipes,
      loading: recipesLoading,
      error: recipesError,
      color: 'green'
    },
    {
      title: 'Users',
      icon: '👥',
      description: 'Meet our community members',
      link: '/users',
      data: users?.users,
      loading: usersLoading,
      error: usersError,
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to DummyJSON Explorer 🚀
        </h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
          Discover amazing products, delicious recipes, and connect with users from around the world
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className={`${
              category.color === 'blue' ? 'bg-blue-100' : 
              category.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
            } p-6 text-center`}>
              <div className="text-4xl mb-2">{category.icon}</div>
              <h2 className={`text-2xl font-bold ${
                category.color === 'blue' ? 'text-blue-800' : 
                category.color === 'green' ? 'text-green-800' : 'text-purple-800'
              } mb-2`}>{category.title}</h2>
              <p className={`${
                category.color === 'blue' ? 'text-blue-600' : 
                category.color === 'green' ? 'text-green-600' : 'text-purple-600'
              }`}>{category.description}</p>
            </div>

            <div className="p-6">
              {category.loading ? (
                <LoadingSpinner size="small" text="Loading..." />
              ) : category.error ? (
                <ErrorMessage error={category.error} />
              ) : (
                <div className="space-y-4">
                  {category.data?.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      {item.thumbnail && (
                        <img 
                          src={item.thumbnail || item.image} 
                          alt={item.title || item.name || `${item.firstName} ${item.lastName}`}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 truncate">
                          {item.title || item.name || `${item.firstName} ${item.lastName}`}
                        </h3>
                        {item.price && <p className="text-green-600 font-bold">${item.price}</p>}
                        {item.difficulty && <p className="text-blue-600 text-sm">Difficulty: {item.difficulty}</p>}
                        {item.email && <p className="text-gray-600 text-sm">{item.email}</p>}
                      </div>
                    </div>
                  ))}

                  <Link
                    to={category.link}
                    className={`block w-full text-center ${
                      category.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 
                      category.color === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'
                    } text-white py-3 rounded-lg transition-colors duration-200 font-semibold`}
                  >
                    View All {category.title}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Platform Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600">{products?.total || 0}</div>
            <p className="text-gray-600 mt-2">Total Products</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600">{recipes?.total || 0}</div>
            <p className="text-gray-600 mt-2">Delicious Recipes</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600">{users?.total || 0}</div>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;