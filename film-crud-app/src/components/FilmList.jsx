import React, { Component } from 'react';

class FilmList extends Component {
  renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-base transition-all duration-200 ${
            i <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  }

  render() {
    const { films, onEdit, onDelete } = this.props;

    if (films.length === 0) {
      return (
        <div className="p-16 text-center text-gray-500 bg-white">
          <p className="text-lg">Hozircha filmlar mavjud emas. Yangi film qo'shing!</p>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-base tracking-wider border-r border-gray-500 last:border-r-0">
                ID
              </th>
              <th className="px-6 py-4 text-left font-semibold text-base tracking-wider border-r border-gray-500 last:border-r-0">
                Film Nomi
              </th>
              <th className="px-6 py-4 text-left font-semibold text-base tracking-wider border-r border-gray-500 last:border-r-0">
                Janr
              </th>
              <th className="px-6 py-4 text-left font-semibold text-base tracking-wider border-r border-gray-500 last:border-r-0">
                Reyting
              </th>
              <th className="px-6 py-4 text-left font-semibold text-base tracking-wider border-r border-gray-500 last:border-r-0">
                Yil
              </th>
              <th className="px-6 py-4 text-left font-semibold text-base tracking-wider">
                Amal
              </th>
            </tr>
          </thead>
          <tbody>
            {films.map((film, index) => (
              <tr 
                key={film.id} 
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-b border-gray-200 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300`}
              >
                <td className="px-6 py-4 text-gray-700 font-mono font-semibold text-sm">
                  {String(film.id).padStart(4, '0')}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {film.title}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {film.genre}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {this.renderStars(film.rating)}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {film.year}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      className="w-9 h-9 bg-green-500 text-white rounded-md hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                      onClick={() => onEdit(film)}
                      title="Film ma'lumotlarini tahrirlash"
                    >
                      ✏️
                    </button>
                    <button
                      className="w-9 h-9 bg-red-500 text-white rounded-md hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                      onClick={() => onDelete(film.id)}
                      title="Filmni o'chirish"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FilmList;