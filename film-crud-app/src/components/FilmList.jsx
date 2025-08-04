import React, { Component } from 'react';
import './FilmList.css';

class FilmList extends Component {
  renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
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
        <div className="no-films">
          <p>Hozircha filmlar mavjud emas. Yangi film qo'shing!</p>
        </div>
      );
    }

    return (
      <div className="film-list">
        <table className="films-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Film Nomi</th>
              <th>Janr</th>
              <th>Reyting</th>
              <th>Yil</th>
              <th>Amal</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film, index) => (
              <tr key={film.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{String(film.id).padStart(4, '0')}</td>
                <td>{film.title}</td>
                <td>{film.genre}</td>
                <td>
                  <div className="rating-stars">
                    {this.renderStars(film.rating)}
                  </div>
                </td>
                <td>{film.year}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => onEdit(film)}
                      title="Film ma'lumotlarini tahrirlash"
                    >
                      ✏️
                    </button>
                    <button
                      className="delete-btn"
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