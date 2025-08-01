import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { API_ENDPOINTS } from '../../static/apiConfig';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const searchRef = useRef(null);
  const limit = 12;

  const { data, loading, error } = useApi(
    `${API_ENDPOINTS.users}?limit=${limit}&skip=${(currentPage - 1) * limit}&q=${searchTerm}`,
    [currentPage, searchTerm]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchRef.current.value);
    setCurrentPage(1);
  };

  const totalPages = data ? Math.ceil(data.total / limit) : 0;

  if (loading) return <LoadingSpinner text="Loading users..." />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">👥 Users</h1>
        <p className="text-xl text-gray-600">Meet our amazing community members</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search users..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results info */}
      <div className="text-center text-gray-600">
        Showing {data?.users?.length || 0} of {data?.total || 0} users
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.users?.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-20 h-20 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              
              <h3 className="font-semibold text-gray-800 text-lg mb-1">
                {user.firstName} {user.lastName}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3">{user.email}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <span>💼</span>
                  <span>{user.company?.title || 'N/A'}</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <span>📍</span>
                  <span>{user.address?.city}, {user.address?.state}</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <span>🎂</span>
                  <span>{user.age} years old</span>
                </div>
              </div>

              <div className="mt-4 flex justify-center space-x-1">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  {user.gender}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {user.bloodGroup}
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
                      ? 'bg-purple-600 text-white'
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

export default Users;