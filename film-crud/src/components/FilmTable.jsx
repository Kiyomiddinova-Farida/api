import React, { Component } from 'react';

class FilmTable extends Component {
  render() {
    const { films, onEdit, onDelete } = this.props;

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-600 text-white">
              <th className="px-6 py-4 text-left font-medium uppercase tracking-wider">
                Film ID
              </th>
              <th className="px-6 py-4 text-left font-medium uppercase tracking-wider">
                Film Name
              </th>
              <th className="px-6 py-4 text-left font-medium uppercase tracking-wider">
                Film Email
              </th>
              <th className="px-6 py-4 text-left font-medium uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {films.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                  No films found
                </td>
              </tr>
            ) : (
              films.map((film, index) => (
                <tr 
                  key={film.id} 
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  }`}
                >
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    {film.id.toString().padStart(4, '0')}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {film.title}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {film.genre} ({film.year}) - Rating: {film.rating}/5
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      film.rating >= 4 
                        ? 'bg-green-100 text-green-800' 
                        : film.rating >= 3 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {film.rating >= 4 ? 'Active' : film.rating >= 3 ? 'Pending' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onEdit(film)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => onDelete(film.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FilmTable;