import React, { Component } from 'react';
import './FilmModal.css';

class FilmModal extends Component {
  constructor(props) {
    super(props);
    
    // Initialize state with film data if editing, otherwise empty form
    const { film } = props;
    this.state = {
      title: film ? film.title : '',
      genre: film ? film.genre : '',
      rating: film ? film.rating : 1,
      year: film ? film.year : new Date().getFullYear(),
      errors: {}
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: name === 'rating' || name === 'year' ? parseInt(value) : value,
      errors: {
        ...this.state.errors,
        [name]: '' // Clear error when user starts typing
      }
    });
  }

  validateForm = () => {
    const { title, genre, rating, year } = this.state;
    const errors = {};

    if (!title.trim()) {
      errors.title = 'Film nomi kiritilishi shart';
    }

    if (!genre.trim()) {
      errors.genre = 'Janr tanlanishi shart';
    }

    if (rating < 1 || rating > 5) {
      errors.rating = 'Reyting 1 dan 5 gacha bo\'lishi kerak';
    }

    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear + 5) {
      errors.year = `Yil ${1900} dan ${currentYear + 5} gacha bo'lishi kerak`;
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (this.validateForm()) {
      const { title, genre, rating, year } = this.state;
      this.props.onSave({
        title: title.trim(),
        genre: genre.trim(),
        rating,
        year
      });
    }
  }

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    const { film, onClose } = this.props;
    const { title, genre, rating, year, errors } = this.state;
    const isEditing = !!film;

    const genreOptions = [
      'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 
      'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Crime'
    ];

    return (
      <div className="modal-overlay" onClick={this.handleOverlayClick}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{isEditing ? 'Film Ma\'lumotlarini Yangilash' : 'Yangi Film Qo\'shish'}</h2>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>

          <form onSubmit={this.handleSubmit} className="film-form">
            <div className="form-group">
              <label htmlFor="title">Film Nomi *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={this.handleInputChange}
                className={errors.title ? 'error' : ''}
                placeholder="Film nomini kiriting"
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="genre">Janr *</label>
              <select
                id="genre"
                name="genre"
                value={genre}
                onChange={this.handleInputChange}
                className={errors.genre ? 'error' : ''}
              >
                <option value="">Janr tanlang</option>
                {genreOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.genre && <span className="error-message">{errors.genre}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="rating">Reyting *</label>
                <select
                  id="rating"
                  name="rating"
                  value={rating}
                  onChange={this.handleInputChange}
                  className={errors.rating ? 'error' : ''}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>
                      {num} ⭐
                    </option>
                  ))}
                </select>
                {errors.rating && <span className="error-message">{errors.rating}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="year">Chiqqan Yili *</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={year}
                  onChange={this.handleInputChange}
                  className={errors.year ? 'error' : ''}
                  min="1900"
                  max={new Date().getFullYear() + 5}
                  placeholder="2024"
                />
                {errors.year && <span className="error-message">{errors.year}</span>}
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Bekor qilish
              </button>
              <button type="submit" className="submit-btn">
                {isEditing ? 'Yangilash' : 'Qo\'shish'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FilmModal;