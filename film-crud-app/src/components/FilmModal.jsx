import React, { Component } from 'react';

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
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-5 backdrop-blur-sm animate-fade-in"
        onClick={this.handleOverlayClick}
      >
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-in">
          {/* Header */}
          <div className="flex justify-between items-center p-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-t-xl">
            <h2 className="text-xl font-semibold">
              {isEditing ? 'Film Ma\'lumotlarini Yangilash' : 'Yangi Film Qo\'shish'}
            </h2>
            <button 
              className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 hover:rotate-90 transition-all duration-300"
              onClick={onClose}
            >
              <span className="text-xl">×</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={this.handleSubmit} className="p-6">
            {/* Title Field */}
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2 text-gray-700 font-semibold text-sm">
                Film Nomi *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={this.handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg text-base transition-all duration-300 bg-white ${
                  errors.title 
                    ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                    : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                } focus:outline-none`}
                placeholder="Film nomini kiriting"
              />
              {errors.title && (
                <span className="block text-red-500 text-xs mt-1 font-medium">
                  {errors.title}
                </span>
              )}
            </div>

            {/* Genre Field */}
            <div className="mb-5">
              <label htmlFor="genre" className="block mb-2 text-gray-700 font-semibold text-sm">
                Janr *
              </label>
              <select
                id="genre"
                name="genre"
                value={genre}
                onChange={this.handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg text-base transition-all duration-300 bg-white cursor-pointer ${
                  errors.genre 
                    ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                    : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                } focus:outline-none`}
              >
                <option value="">Janr tanlang</option>
                {genreOptions.map(option => (
                  <option key={option} value={option} className="py-2">
                    {option}
                  </option>
                ))}
              </select>
              {errors.genre && (
                <span className="block text-red-500 text-xs mt-1 font-medium">
                  {errors.genre}
                </span>
              )}
            </div>

            {/* Rating and Year Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {/* Rating Field */}
              <div>
                <label htmlFor="rating" className="block mb-2 text-gray-700 font-semibold text-sm">
                  Reyting *
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={rating}
                  onChange={this.handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg text-base transition-all duration-300 bg-white cursor-pointer ${
                    errors.rating 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                      : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                  } focus:outline-none`}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num} className="py-2">
                      {num} ⭐
                    </option>
                  ))}
                </select>
                {errors.rating && (
                  <span className="block text-red-500 text-xs mt-1 font-medium">
                    {errors.rating}
                  </span>
                )}
              </div>

              {/* Year Field */}
              <div>
                <label htmlFor="year" className="block mb-2 text-gray-700 font-semibold text-sm">
                  Chiqqan Yili *
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={year}
                  onChange={this.handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg text-base transition-all duration-300 bg-white ${
                    errors.year 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                      : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                  } focus:outline-none`}
                  min="1900"
                  max={new Date().getFullYear() + 5}
                  placeholder="2024"
                />
                {errors.year && (
                  <span className="block text-red-500 text-xs mt-1 font-medium">
                    {errors.year}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-5 border-t border-gray-200">
              <button 
                type="button" 
                className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-300 min-w-[120px] order-2 sm:order-1"
                onClick={onClose}
              >
                Bekor qilish
              </button>
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 min-w-[120px] order-1 sm:order-2"
              >
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