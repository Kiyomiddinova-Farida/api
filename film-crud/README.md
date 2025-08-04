# Film Management System (CRUD)

A React-based film management application built with class components, Vite, and Tailwind CSS.

## Features

- ✅ **CRUD Operations**: Create, Read, Update, Delete films
- ✅ **Class Components**: Built entirely with React class components
- ✅ **Modern UI**: Styled with Tailwind CSS for a clean, professional look
- ✅ **Modal Forms**: Popup modal for adding and editing films
- ✅ **Search Functionality**: Search films by title, genre, or year
- ✅ **Form Validation**: Client-side validation with error messaging
- ✅ **Responsive Design**: Works on desktop and mobile devices

## Film Data Structure

Each film contains the following fields:
- **ID**: Auto-generated using `Date.now()`
- **Title**: Film name
- **Genre**: Film category (Action, Comedy, Drama, Horror, Romance, Sci-Fi, Thriller, Crime, Adventure, Animation)
- **Rating**: User rating from 1 to 5 stars
- **Year**: Release year

## Project Structure

```
film-crud/
├── src/
│   ├── components/
│   │   ├── FilmManager.jsx    # Main container component
│   │   ├── FilmTable.jsx      # Table component for displaying films
│   │   └── FilmModal.jsx      # Modal form for add/edit operations
│   ├── App.jsx                # Root application component
│   ├── index.css              # Tailwind CSS imports
│   └── main.jsx               # Application entry point
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd film-crud
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

### Adding a Film
1. Click the **"+ Add Film"** button
2. Fill in the form fields:
   - Film Title (required)
   - Genre (select from dropdown)
   - Rating (1-5 stars)
   - Release Year
3. Click **"Add Film"** to save

### Editing a Film
1. Click the **edit button (✏️)** in the Action column
2. Modify the fields in the popup form
3. Click **"Update Film"** to save changes

### Deleting a Film
1. Click the **delete button (🗑️)** in the Action column
2. The film will be removed from the list

### Searching Films
- Use the search box to filter films by title, genre, or year
- Search is case-insensitive and matches partial strings

## Technologies Used

- **React 19.1.0**: UI library with class components
- **Vite 7.0.6**: Build tool and development server
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **ESLint**: Code linting

## Component Architecture

### FilmManager (Main Component)
- Manages application state
- Handles CRUD operations
- Controls modal visibility
- Implements search functionality

### FilmTable
- Displays films in a table format
- Handles edit/delete button clicks
- Shows status based on rating
- Responsive table design

### FilmModal
- Form for adding/editing films
- Client-side validation
- Error messaging
- Backdrop click to close

## Status Indicators

Films are automatically assigned status based on their rating:
- **Active** (Green): Rating 4-5 stars
- **Pending** (Yellow): Rating 3 stars
- **Inactive** (Red): Rating 1-2 stars

## Development

The application is built with React class components as requested, using:
- Constructor-based state initialization
- Arrow functions for event handlers
- Lifecycle methods where needed
- Traditional `this.setState()` for state updates

All styling is handled through Tailwind CSS utility classes, providing a consistent and professional appearance that matches modern web application standards.
