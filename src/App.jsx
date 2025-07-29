import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [editingUser, setEditingUser] = useState(null)
  const [nextId, setNextId] = useState(1)

  // Form refs
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const birthDateRef = useRef()
  const genderRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      birthDate: birthDateRef.current.value,
      gender: genderRef.current.value
    }

    if (editingUser) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === editingUser.id 
          ? { ...user, ...formData }
          : user
      ))
      setEditingUser(null)
    } else {
      // Add new user
      const newUser = {
        id: nextId,
        ...formData,
        points: Math.floor(Math.random() * 100000) // Random points for demo
      }
      setUsers([...users, newUser])
      setNextId(nextId + 1)
    }

    // Reset form
    resetForm()
  }

  const resetForm = () => {
    nameRef.current.value = ''
    emailRef.current.value = ''
    passwordRef.current.value = ''
    birthDateRef.current.value = ''
    genderRef.current.value = ''
  }

  const handleEdit = (user) => {
    setEditingUser(user)
    nameRef.current.value = user.name
    emailRef.current.value = user.email
    passwordRef.current.value = user.password
    birthDateRef.current.value = user.birthDate
    genderRef.current.value = user.gender
  }

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId))
    if (editingUser && editingUser.id === userId) {
      setEditingUser(null)
      resetForm()
    }
  }

  const cancelEdit = () => {
    setEditingUser(null)
    resetForm()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-green-600 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Signup Form - Left Side */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            {editingUser ? 'Edit User' : 'Signup Form'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                ref={nameRef}
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                ref={emailRef}
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Birth Date
              </label>
              <input
                ref={birthDateRef}
                type="date"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                ref={genderRef}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition duration-200"
              >
                {editingUser ? 'Update' : 'Submit'}
              </button>
              
              {editingUser && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition duration-200"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* User Table - Right Side */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-teal-600 text-white p-6">
            <h2 className="text-2xl font-bold">User Leaderboard</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Rank</th>
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Points</th>
                  <th className="px-6 py-4 text-left font-semibold">Team</th>
                  <th className="px-6 py-4 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                      No users registered yet. Fill out the form to add users.
                    </td>
                  </tr>
                ) : (
                  users
                    .sort((a, b) => b.points - a.points)
                    .map((user, index) => (
                      <tr 
                        key={user.id} 
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="px-6 py-4 text-teal-600 font-bold text-lg">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-gray-700 font-semibold">
                          {user.points.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-teal-600 font-medium">
                          {user.email.includes('student') ? 'Students' : 'dcode'}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(user)}
                              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition duration-200"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition duration-200"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
          
          {users.length > 0 && (
            <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
              Total Users: {users.length}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App