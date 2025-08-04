import React, { Component } from 'react';
import FilmTable from './FilmTable';
import FilmModal from './FilmModal';

class FilmManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [
        {
          id: 1,
          title: "The Shawshank Redemption",
          genre: "Drama", 
          rating: 5,
          year: 1994
        },
        {
          id: 2,
          title: "The Godfather",
          genre: "Crime",
          rating: 5,
          year: 1972
        },
        {
          id: 3,
          title: "The Dark Knight",
          genre: "Action",
          rating: 5,
          year: 2008
        }
      ],
      showModal: false,
      editingFilm: null,
      searchTerm: ''
    };
  }

  // Show modal for adding new film
  showAddModal = () => {
    this.setState({
      showModal: true,
      editingFilm: null
    });
  };

  // Show modal for editing film
  showEditModal = (film) => {
    this.setState({
      showModal: true,
      editingFilm: film
    });
  };

  // Close modal
  closeModal = () => {
    this.setState({
      showModal: false,
      editingFilm: null
    });
  };

  // Add new film
  addFilm = (filmData) => {
    const newFilm = {
      ...filmData,
      id: Date.now()
    };
    
    this.setState(prevState => ({
      films: [...prevState.films, newFilm],
      showModal: false,
      editingFilm: null
    }));
  };

  // Update existing film
  updateFilm = (filmData) => {
    this.setState(prevState => ({
      films: prevState.films.map(film => 
        film.id === this.state.editingFilm.id 
          ? { ...filmData, id: this.state.editingFilm.id }
          : film
      ),
      showModal: false,
      editingFilm: null
    }));
  };

  // Delete film
  deleteFilm = (filmId) => {
    this.setState(prevState => ({
      films: prevState.films.filter(film => film.id !== filmId)
    }));
  };

  // Handle search
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  // Filter films based on search term
  getFilteredFilms = () => {
    const { films, searchTerm } = this.state;
    if (!searchTerm) return films;
    
    return films.filter(film =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.year.toString().includes(searchTerm)
    );
  };

  render() {
    const { showModal, editingFilm, searchTerm } = this.state;
    const filteredFilms = this.getFilteredFilms();

    return (
      <div className="max-w-6xl mx-auto">
        {/* Header with Add button and Search */}
        <div className="mb-6 flex justify-between items-center gap-4">
          <button
            onClick={this.showAddModal}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
          >
            <span className="text-xl">+</span>
            Add Film
          </button>
          
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search films..."
              value={searchTerm}
              onChange={this.handleSearch}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Films Table */}
        <FilmTable
          films={filteredFilms}
          onEdit={this.showEditModal}
          onDelete={this.deleteFilm}
        />

        {/* Modal */}
        {showModal && (
          <FilmModal
            film={editingFilm}
            onSave={editingFilm ? this.updateFilm : this.addFilm}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default FilmManager;