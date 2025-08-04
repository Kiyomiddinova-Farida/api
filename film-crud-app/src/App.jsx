import React, { Component } from 'react';
import './App.css';
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
      <div className="app">
        <div className="container">
          <h1 className="app-title">Film Collection Manager</h1>
          
          <div className="toolbar">
            <button 
              className="add-btn"
              onClick={this.handleAddFilm}
            >
              <i className="plus-icon">+</i>
              Add Film
            </button>
            
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search films..."
                value={this.state.searchTerm}
                onChange={(e) => this.handleSearch(e.target.value)}
              />
              <button className="search-btn">
                <i className="search-icon">🔍</i>
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
