import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useGetValues } from "../hooks/useGetValues";
import { api } from "../api";
import "./Users.css";

const initialState = {
  fname: "",
  lname: "",
  age: "",
  gender: "male"
};

const Users = () => {
  const { data, loading, error } = useFetch("users");
  const { formData, handleChange, setFormData } = useGetValues(initialState);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      ...formData,
      age: Number(formData.age)
    };

    try {
      if (editingUser) {
        // Update existing user
        const response = await api.put(`users/${editingUser.id}`, userData);
        setUsers(users.map(user => 
          user.id === editingUser.id ? response.data : user
        ));
        setEditingUser(null);
      } else {
        // Create new user
        const response = await api.post("users", userData);
        setUsers([...users, response.data]);
      }
      setFormData(initialState);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
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

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="users-container">
      <div className="header">
        <h1 className="title">👥 Users Management</h1>
        <p className="subtitle">Manage your users with full CRUD operations</p>
      </div>

      <div className="content">
        <div className="form-section">
          <h2>{editingUser ? "Edit User" : "Add New User"}</h2>
          <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="Enter first name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Enter last name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                min="1"
                max="120"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {editingUser ? "Update User" : "Add User"}
              </button>
              {editingUser && (
                <button 
                  type="button" 
                  onClick={handleCancelEdit}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="users-section">
          <h2>Users List ({users.length})</h2>
          {users.length === 0 ? (
            <div className="empty-state">
              <p>No users found. Add your first user!</p>
            </div>
          ) : (
            <div className="users-grid">
              {users.map((user) => (
                <div key={user.id} className="user-card">
                  <div className="user-avatar">
                    <span>{user.fname[0]}{user.lname[0]}</span>
                  </div>
                  <div className="user-info">
                    <h3>{user.fname} {user.lname}</h3>
                    <p className="user-details">
                      <span className="age">Age: {user.age}</span>
                      <span className="gender">Gender: {user.gender}</span>
                    </p>
                  </div>
                  <div className="user-actions">
                    <button 
                      onClick={() => handleEdit(user)}
                      className="btn btn-edit"
                      title="Edit user"
                    >
                      ✏️
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-delete"
                      title="Delete user"
                    >
                      🗑️
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