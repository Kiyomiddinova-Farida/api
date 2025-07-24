import { useState, useRef } from 'react'
import UserForm from './components/UserForm'
import UserTable from './components/UserTable'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Domenic', points: 88110, team: 'dcode' },
    { id: 2, name: 'Sally', points: 72400, team: 'Students' },
    { id: 3, name: 'Nick', points: 52300, team: 'dcode' }
  ])
  const [editingUser, setEditingUser] = useState(null)
  const nextIdRef = useRef(4)

  const addUser = (userData) => {
    const newUser = {
      id: nextIdRef.current++,
      ...userData
    }
    setUsers(prevUsers => [...prevUsers, newUser])
  }

  const updateUser = (userData) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === editingUser.id ? { ...user, ...userData } : user
      )
    )
    setEditingUser(null)
  }

  const deleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
    if (editingUser && editingUser.id === id) {
      setEditingUser(null)
    }
  }

  const startEdit = (user) => {
    setEditingUser(user)
  }

  const cancelEdit = () => {
    setEditingUser(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          User Management System
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Form */}
          <div className="order-2 lg:order-1">
            <UserForm
              onSubmit={editingUser ? updateUser : addUser}
              editingUser={editingUser}
              onCancel={cancelEdit}
            />
          </div>
          
          {/* Right side - Table */}
          <div className="order-1 lg:order-2">
            <UserTable
              users={users}
              onEdit={startEdit}
              onDelete={deleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
