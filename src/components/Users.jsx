import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useGetValues } from "../hooks/useGetValues";
import { api } from "../api";

const initialState = {
  fname: "",
  lname: "",
  age: "",
  gender: ""
};

const Users = () => {
  const { data, loading, error } = useFetch("users");
  const { formData, handleChange, setFormData } = useGetValues(initialState);
  const [editingUser, setEditingUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      ...formData,
      age: Number(formData.age)
    };

    if (editingUser) {
      // Update existing user
      api.put(`users/${editingUser.id}`, userData)
        .then(() => {
          setEditingUser(null);
          setFormData(initialState);
          window.location.reload(); // Simple refresh to update the list
        })
        .catch(err => console.error("Error updating user:", err));
    } else {
      // Create new user
      api.post("users", userData)
        .then(() => {
          setFormData(initialState);
          window.location.reload(); // Simple refresh to update the list
        })
        .catch(err => console.error("Error creating user:", err));
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      fname: user.fname,
      lname: user.lname,
      age: user.age.toString(),
      gender: user.gender
    });
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setFormData(initialState);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      api.delete(`users/${id}`)
        .then(() => {
          window.location.reload(); // Simple refresh to update the list
        })
        .catch(err => console.error("Error deleting user:", err));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error loading users: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Users Management</h1>
          <p className="text-lg text-gray-600">Create, read, update, and delete users</p>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {editingUser ? "Edit User" : "Add New User"}
          </h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter first name"
                required
              />
            </div>

            <div>
              <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                value={formData.lname}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter last name"
                required
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter age"
                min="1"
                max="120"
                required
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2 lg:col-span-4 flex gap-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
              >
                {editingUser ? "Update User" : "Add User"}
              </button>
              
              {editingUser && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-md shadow-sm transition duration-200 ease-in-out"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Users List Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Users List ({data.length})</h2>
          </div>
          
          {data.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">👥</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
              <p className="text-gray-500">Add your first user using the form above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {data.map((user) => (
                <div
                  key={user.id}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-200 ease-in-out"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {user.fname.charAt(0)}{user.lname.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {user.fname} {user.lname}
                        </h3>
                        <p className="text-sm text-gray-600">ID: {user.id}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium w-16">Age:</span>
                      <span>{user.age} years old</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium w-16">Gender:</span>
                      <span className="capitalize">{user.gender}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-3 rounded-md transition duration-200 ease-in-out"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-3 rounded-md transition duration-200 ease-in-out"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;