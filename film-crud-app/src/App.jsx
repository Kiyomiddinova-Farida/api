import React, { Component } from 'react';
import FilmList from './components/FilmList';
import FilmModal from './components/FilmModal';

class App extends Component {
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
          title: "Pulp Fiction",
          genre: "Crime",
          rating: 4,
          year: 1994
        }
      ],
      isModalOpen: false,
      editingFilm: null,
      searchTerm: ''
    };
  }

  handleAddFilm = () => {
    this.setState({
      isModalOpen: true,
      editingFilm: null
    });
  }

  handleEditFilm = (film) => {
    this.setState({
      isModalOpen: true,
      editingFilm: film
    });
  }

  handleDeleteFilm = (filmId) => {
    if (window.confirm('Bu filmni o\'chirishni xohlaysizmi?')) {
      this.setState(prevState => ({
        films: prevState.films.filter(film => film.id !== filmId)
      }));
    }
  }

  handleSaveFilm = (filmData) => {
    if (this.state.editingFilm) {
      // Update existing film
      this.setState(prevState => ({
        films: prevState.films.map(film =>
          film.id === this.state.editingFilm.id ? { ...filmData, id: this.state.editingFilm.id } : film
        ),
        isModalOpen: false,
        editingFilm: null
      }));
    } else {
      // Add new film
      const newFilm = {
        ...filmData,
        id: Date.now()
      };
      this.setState(prevState => ({
        films: [...prevState.films, newFilm],
        isModalOpen: false
      }));
    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
      editingFilm: null
    });
  }

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm });
  }

  getFilteredFilms = () => {
    const { films, searchTerm } = this.state;
    if (!searchTerm) return films;
    
    return films.filter(film =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.year.toString().includes(searchTerm)
    );
  }

  render() {
    const { isModalOpen, editingFilm } = this.state;
    const filteredFilms = this.getFilteredFilms();

    return (
      <div className="min-h-screen p-5">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 text-center">
            <h1 className="text-4xl font-bold text-shadow">Film Collection Manager</h1>
          </div>
          
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-center p-6 bg-white border-b-2 border-gray-200 gap-4">
            <button 
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
              onClick={this.handleAddFilm}
            >
              <span className="text-lg font-bold">+</span>
              Add Film
            </button>
            
            <div className="flex items-center gap-3 w-full sm:max-w-md">
              <input
                type="text"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-300"
                placeholder="Search films..."
                value={this.state.searchTerm}
                onChange={(e) => this.handleSearch(e.target.value)}
              />
              <button className="px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-base">🔍</span>
              </button>
            </div>
          </div>

          <FilmList
            films={filteredFilms}
            onEdit={this.handleEditFilm}
            onDelete={this.handleDeleteFilm}
          />

          {isModalOpen && (
            <FilmModal
              film={editingFilm}
              onSave={this.handleSaveFilm}
              onClose={this.handleCloseModal}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
