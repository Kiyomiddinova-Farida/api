import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([
    { id: 1, fullName: 'Domenic', email: 'domenic@example.com', password: '****', birthDate: '1990-01-01', gender: 'Male', points: 88110, team: 'dcode' },
    { id: 2, fullName: 'Sally', email: 'sally@example.com', password: '****', birthDate: '1995-05-15', gender: 'Female', points: 72400, team: 'Students' },
    { id: 3, fullName: 'Nick', email: 'nick@example.com', password: '****', birthDate: '1988-12-10', gender: 'Male', points: 52300, team: 'dcode' }
  ])
  const [editingUser, setEditingUser] = useState(null)

  const fullNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const birthDateRef = useRef()
  const genderRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      birthDate: birthDateRef.current.value,
      gender: genderRef.current.value,
      points: Math.floor(Math.random() * 100000), // Random points for demo
      team: Math.random() > 0.5 ? 'dcode' : 'Students' // Random team for demo
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
        id: Date.now(),
        ...formData
      }
      setUsers([...users, newUser])
    }

    // Reset form
    fullNameRef.current.value = ''
    emailRef.current.value = ''
    passwordRef.current.value = ''
    birthDateRef.current.value = ''
    genderRef.current.value = ''
  }

  const handleEdit = (user) => {
    setEditingUser(user)
    fullNameRef.current.value = user.fullName
    emailRef.current.value = user.email
    passwordRef.current.value = user.password
    birthDateRef.current.value = user.birthDate
    genderRef.current.value = user.gender
  }

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id))
    if (editingUser && editingUser.id === id) {
      setEditingUser(null)
      // Reset form
      fullNameRef.current.value = ''
      emailRef.current.value = ''
      passwordRef.current.value = ''
      birthDateRef.current.value = ''
      genderRef.current.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Signup Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              {editingUser ? 'Edit User' : 'Signup Form'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  ref={fullNameRef}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Birth Date
                </label>
                <input
                  ref={birthDateRef}
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  ref={genderRef}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  required
                >
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              >
                {editingUser ? 'Update' : 'Submit'}
              </button>

              {editingUser && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingUser(null)
                    fullNameRef.current.value = ''
                    emailRef.current.value = ''
                    passwordRef.current.value = ''
                    birthDateRef.current.value = ''
                    genderRef.current.value = ''
                  }}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
              )}
            </form>
          </div>

          {/* User Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-teal-600 text-white">
              <div className="grid grid-cols-6 gap-4 p-4 font-semibold">
                <div>Rank</div>
                <div>Name</div>
                <div>Points</div>
                <div>Team</div>
                <div>Email</div>
                <div>Actions</div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              {users.map((user, index) => (
                <div key={user.id} className="grid grid-cols-6 gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-teal-600">
                    {index + 1}
                  </div>
                  <div className="font-medium text-gray-900">
                    {user.fullName}
                  </div>
                  <div className="text-gray-600">
                    {user.points.toLocaleString()}
                  </div>
                  <div className="text-teal-600 font-medium">
                    {user.team}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {user.email}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App