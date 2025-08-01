import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { API_ENDPOINTS } from '../../static/apiConfig';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const UserDetail = () => {
  const { id } = useParams();
  const { data: user, loading, error } = useApi(API_ENDPOINTS.user(id));

  if (loading) return <LoadingSpinner text="Loading user details..." />;
  if (error) return <ErrorMessage error={error} />;
  if (!user) return <ErrorMessage error="User not found" />;

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>→</span>
        <Link to="/users" className="hover:text-blue-600">Users</Link>
        <span>→</span>
        <span className="text-gray-800 font-semibold">{user.firstName} {user.lastName}</span>
      </nav>

      {/* User Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{user.firstName} {user.lastName}</h1>
            <p className="text-xl opacity-90 mb-2">{user.email}</p>
            <p className="text-lg opacity-80">{user.phone}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {user.gender}
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {user.age} years old
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {user.bloodGroup}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">👤</span>
            Personal Information
          </h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-600">First Name</label>
                <p className="text-gray-800">{user.firstName}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Last Name</label>
                <p className="text-gray-800">{user.lastName}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-600">Age</label>
                <p className="text-gray-800">{user.age}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Gender</label>
                <p className="text-gray-800">{user.gender}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-600">Birth Date</label>
                <p className="text-gray-800">{new Date(user.birthDate).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Blood Group</label>
                <p className="text-gray-800">{user.bloodGroup}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-600">Height</label>
                <p className="text-gray-800">{user.height} cm</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Weight</label>
                <p className="text-gray-800">{user.weight} kg</p>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-semibold text-gray-600">Eye Color</label>
              <p className="text-gray-800">{user.eyeColor}</p>
            </div>
          </div>
        </div>

        {/* Contact & Address */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">📍</span>
            Contact & Address
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-600">Email</label>
              <p className="text-gray-800">{user.email}</p>
            </div>
            
            <div>
              <label className="text-sm font-semibold text-gray-600">Phone</label>
              <p className="text-gray-800">{user.phone}</p>
            </div>
            
            <div>
              <label className="text-sm font-semibold text-gray-600">Address</label>
              <p className="text-gray-800">
                {user.address?.address}<br />
                {user.address?.city}, {user.address?.state} {user.address?.postalCode}<br />
                {user.address?.country}
              </p>
            </div>

            {user.address?.coordinates && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <label className="text-sm font-semibold text-blue-800">Coordinates</label>
                <p className="text-blue-700 text-sm">
                  Lat: {user.address.coordinates.lat}, Lng: {user.address.coordinates.lng}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Company Information */}
        {user.company && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-2">💼</span>
              Company Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-600">Company</label>
                <p className="text-gray-800">{user.company.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-600">Title</label>
                <p className="text-gray-800">{user.company.title}</p>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-600">Department</label>
                <p className="text-gray-800">{user.company.department}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <label className="text-sm font-semibold text-gray-600">Address</label>
                <p className="text-gray-800">
                  {user.company.address?.address}<br />
                  {user.company.address?.city}, {user.company.address?.state} {user.company.address?.postalCode}<br />
                  {user.company.address?.country}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">ℹ️</span>
            Additional Information
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-600">Username</label>
              <p className="text-gray-800">{user.username}</p>
            </div>
            
            <div>
              <label className="text-sm font-semibold text-gray-600">University</label>
              <p className="text-gray-800">{user.university}</p>
            </div>
            
            {user.crypto && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <label className="text-sm font-semibold text-yellow-800">Crypto</label>
                <p className="text-yellow-700 text-sm">
                  {user.crypto.coin}: {user.crypto.wallet}<br />
                  Network: {user.crypto.network}
                </p>
              </div>
            )}

            {user.bank && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <label className="text-sm font-semibold text-green-800">Bank Information</label>
                <p className="text-green-700 text-sm">
                  {user.bank.cardType}: **** **** **** {user.bank.cardNumber?.slice(-4)}<br />
                  IBAN: {user.bank.iban}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* User Agent */}
      {user.userAgent && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">🖥️ User Agent</h3>
          <p className="text-gray-600 text-sm break-all">{user.userAgent}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;