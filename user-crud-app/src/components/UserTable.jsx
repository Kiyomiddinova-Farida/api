import { useState } from 'react'

const UserTable = ({ users, onEdit, onDelete }) => {
  const [sortField, setSortField] = useState('points')
  const [sortDirection, setSortDirection] = useState('desc')

  // Sort users based on current sort field and direction
  const sortedUsers = [...users].sort((a, b) => {
    let aValue = a[sortField]
    let bValue = b[sortField]
    
    // Handle numeric sorting for points
    if (sortField === 'points') {
      aValue = Number(aValue) || 0
      bValue = Number(bValue) || 0
    } else {
      // Handle string sorting
      aValue = String(aValue).toLowerCase()
      bValue = String(bValue).toLowerCase()
    }
    
    if (aValue < bValue) {
      return sortDirection === 'asc' ? -1 : 1
    }
    if (aValue > bValue) {
      return sortDirection === 'asc' ? 1 : -1
    }
    return 0
  })

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  const handleDelete = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      onDelete(user.id)
    }
  }

  const getSortIcon = (field) => {
    if (field !== sortField) return '↕️'
    return sortDirection === 'asc' ? '↑' : '↓'
  }

  const getTeamColor = (team) => {
    const colors = {
      'dcode': 'bg-blue-100 text-blue-800',
      'Students': 'bg-green-100 text-green-800',
      'Frontend': 'bg-purple-100 text-purple-800',
      'Backend': 'bg-orange-100 text-orange-800'
    }
    return colors[team] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-teal-600 text-white p-6">
        <h2 className="text-2xl font-bold text-center">User Leaderboard</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Rank</th>
              <th 
                className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-teal-600 transition-colors"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-2">
                  Name {getSortIcon('name')}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-teal-600 transition-colors"
                onClick={() => handleSort('points')}
              >
                <div className="flex items-center gap-2">
                  Points {getSortIcon('points')}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-teal-600 transition-colors"
                onClick={() => handleSort('team')}
              >
                <div className="flex items-center gap-2">
                  Team {getSortIcon('team')}
                </div>
              </th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                  No users found. Add some users using the form!
                </td>
              </tr>
            ) : (
              sortedUsers.map((user, index) => (
                <tr 
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-teal-600">
                        {index + 1}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    {user.email && (
                      <div className="text-sm text-gray-500">{user.email}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-lg font-semibold text-gray-900">
                      {user.points?.toLocaleString() || '0'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getTeamColor(user.team)}`}>
                      {user.team || 'No Team'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onEdit(user)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                        title="Edit user"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                        title="Delete user"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {sortedUsers.length > 0 && (
        <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600">
          Total users: {sortedUsers.length}
        </div>
      )}
    </div>
  )
}

export default UserTable