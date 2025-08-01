# Users CRUD Application

A beautiful React application with Vite for managing users with full CRUD operations, using JSON Server as a backend and custom hooks for data management.

## Features

- ✨ **Modern UI Design** - Beautiful, responsive interface with gradient backgrounds and smooth animations
- 🔄 **Full CRUD Operations** - Create, Read, Update, and Delete users
- 🎨 **Custom Hooks** - `useFetch` for data fetching and `useGetValues` for form handling
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and build times
- 🎯 **Type-Safe Forms** - Proper form validation and error handling

## Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: JSON Server
- **HTTP Client**: Axios
- **Styling**: CSS3 with modern features (Grid, Flexbox, Animations)
- **Fonts**: Google Fonts (Inter)

## Project Structure

```
src/
├── api/
│   └── index.js          # API configuration with axios
├── components/
│   ├── Users.jsx         # Main Users CRUD component
│   └── Users.css         # Styling for Users component
├── hooks/
│   ├── useFetch.js       # Custom hook for data fetching
│   └── useGetValues.js   # Custom hook for form handling
├── App.jsx               # Main App component
├── App.css               # Global styles
└── main.jsx              # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone and navigate to the project directory:**
   ```bash
   cd react-users-crud
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the JSON Server (in one terminal):**
   ```bash
   npm run server
   ```
   This will start the JSON Server on `http://localhost:3001`

4. **Start the React development server (in another terminal):**
   ```bash
   npm run dev
   ```
   This will start the Vite development server on `http://localhost:5173`

5. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## API Endpoints

The JSON Server provides the following endpoints:

- `GET /users` - Get all users
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID

## Features Overview

### User Management
- **Add Users**: Fill out the form with first name, last name, age, and gender
- **View Users**: See all users in a beautiful card-based layout
- **Edit Users**: Click the edit button (✏️) to modify user information
- **Delete Users**: Click the delete button (🗑️) to remove users

### Custom Hooks

#### `useFetch(endpoint)`
- Fetches data from the specified API endpoint
- Returns `{ data, loading, error }`
- Automatically handles loading states and error handling

#### `useGetValues(initialState)`
- Manages form state and input changes
- Returns `{ formData, handleChange, setFormData }`
- Simplifies form handling with automatic state updates

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run server` - Start the JSON Server
- `npm run lint` - Run ESLint for code quality

## Customization

### Adding New Fields
To add new user fields:

1. Update the `initialState` in `Users.jsx`
2. Add the new input field in the form
3. Update the `db.json` file structure
4. Modify the user card display in the component

### Styling
The application uses CSS3 with modern features. Main styling files:
- `Users.css` - Component-specific styles
- `App.css` - Global styles and resets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
