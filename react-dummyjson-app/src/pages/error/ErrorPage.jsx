import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-50 to-orange-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🤖💥</div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            The page you're looking for seems to have vanished into the digital void! 
            It might have been moved, deleted, or perhaps it never existed in the first place.
          </p>
        </div>

        {/* Fun Illustration */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8 inline-block">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-600 max-w-md">
            Our explorer robots are searching every corner of the internet, 
            but they couldn't find what you're looking for!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGoHome}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg transform hover:scale-105"
            >
              🏠 Go Home
            </button>
            
            <button
              onClick={handleGoBack}
              className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold shadow-lg border border-gray-200"
            >
              ← Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <p className="text-gray-600 mb-4">Or try one of these popular sections:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm font-semibold"
              >
                🛍️ Products
              </Link>
              <Link
                to="/recipes"
                className="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors duration-200 text-sm font-semibold"
              >
                🍽️ Recipes
              </Link>
              <Link
                to="/users"
                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors duration-200 text-sm font-semibold"
              >
                👥 Users
              </Link>
            </div>
          </div>
        </div>

        {/* Error Code */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 inline-block px-4 py-2 rounded-lg">
            <p className="text-gray-500 text-sm">
              Error Code: <span className="font-mono">404_PAGE_NOT_FOUND</span>
            </p>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
          <div className="text-2xl mb-2">💡</div>
          <p className="text-yellow-800 text-sm">
            <strong>Fun Fact:</strong> The term "404" comes from the room number at CERN 
            where the original web servers were located!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;