import React, { Component } from 'react';

class FilmModal extends Component {
  constructor(props) {
    super(props);
    
    // Initialize form state
    this.state = {
      title: props.film ? props.film.title : '',
      genre: props.film ? props.film.genre : '',
      rating: props.film ? props.film.rating : 1,
      year: props.film ? props.film.year : new Date().getFullYear(),
      errors: {}
    };
  }

  // Handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      errors: { ...this.state.errors, [name]: '' } // Clear error when user types
    });
  };

  // Validate form
  validateForm = () => {
    const { title, genre, rating, year } = this.state;
    const errors = {};
    
    if (!title.trim()) errors.title = 'Film title is required';
    if (!genre.trim()) errors.genre = 'Genre is required';
    if (rating < 1 || rating > 5) errors.rating = 'Rating must be between 1 and 5';
    if (year < 1900 || year > new Date().getFullYear() + 10) {
      errors.year = 'Please enter a valid year';
    }
    
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.validateForm()) {
      const { title, genre, rating, year } = this.state;
      const filmData = {
        title: title.trim(),
        genre: genre.trim(),
        rating: parseInt(rating),
        year: parseInt(year)
      };
      
      this.props.onSave(filmData);
    }
  };

  // Handle backdrop click to close modal
  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, film } = this.props;
    const { title, genre, rating, year, errors } = this.state;
    const isEditing = !!film;

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={this.handleBackdropClick}
      >
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              {isEditing ? 'Edit Film' : 'Add New Film'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Modal Body */}
          <form onSubmit={this.handleSubmit} className="p-6">
            <div className="space-y-4">
              {/* Title Field */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Film Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={this.handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter film title"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              {/* Genre Field */}
              <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
                  Genre
                </label>
                <select
                  id="genre"
                  name="genre"
                  value={genre}
                  onChange={this.handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.genre ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select genre</option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Horror">Horror</option>
                  <option value="Romance">Romance</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Crime">Crime</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Animation">Animation</option>
                </select>
                {errors.genre && (
                  <p className="mt-1 text-sm text-red-600">{errors.genre}</p>
                )}
              </div>

              {/* Rating and Year Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Rating Field */}
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                    Rating (1-5)
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={this.handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.rating ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.rating && (
                    <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
                  )}
                </div>

                {/* Year Field */}
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Release Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    min="1900"
                    max={new Date().getFullYear() + 10}
                    value={year}
                    onChange={this.handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.year ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.year && (
                    <p className="mt-1 text-sm text-red-600">{errors.year}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                {isEditing ? 'Update Film' : 'Add Film'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FilmModal;