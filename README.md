# Users CRUD Application

A modern React application for managing users with full CRUD (Create, Read, Update, Delete) functionality. Built with React, Vite, Tailwind CSS, and json-server.

## Features

- ✨ **Modern UI**: Beautiful and responsive design with Tailwind CSS
- 🔄 **Full CRUD Operations**: Create, Read, Update, and Delete users
- 🎯 **Custom Hooks**: Uses custom `useFetch` and `useGetValues` hooks
- 📱 **Responsive Design**: Works perfectly on all device sizes
- ⚡ **Fast Development**: Powered by Vite for lightning-fast development
- 🎨 **Beautiful Forms**: Well-designed forms with proper validation
- 💾 **JSON Server**: Mock API server for development

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Mock API**: json-server
- **State Management**: Custom React hooks

## User Fields

Each user has the following properties:
- `fname` (First Name) - Text input
- `lname` (Last Name) - Text input  
- `age` - Number input
- `gender` - Select dropdown (male, female, other)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the JSON Server** (in one terminal):
   ```bash
   npm run server
   ```
   This starts the mock API server on `http://localhost:3001`

2. **Start the React Development Server** (in another terminal):
   ```bash
   npm run dev
   ```
   This starts the React app, usually on `http://localhost:5173`

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build
- `npm run server` - Starts the json-server on port 3001
- `npm run lint` - Runs ESLint

## Project Structure

```
src/
├── api/
│   └── index.js          # API utility functions using Axios
├── components/
│   └── Users.jsx         # Main Users CRUD component
├── hooks/
│   ├── useFetch.js       # Custom hook for data fetching
│   └── useGetValues.js   # Custom hook for form handling
├── App.jsx               # Main App component
├── main.jsx              # Application entry point
└── index.css             # Tailwind CSS imports

db.json                   # JSON server database file
```

## Custom Hooks

### useFetch
```javascript
const { data, loading, error } = useFetch("users");
```
- Fetches data from the specified endpoint
- Returns data, loading state, and error state

### useGetValues
```javascript
const { formData, handleChange, setFormData } = useGetValues(initialState);
```
- Manages form state and input changes
- Handles form data updates automatically

## API Endpoints

The json-server provides the following endpoints:

- `GET /users` - Get all users
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID

## UI Features

- **Loading States**: Beautiful spinner while data loads
- **Error Handling**: User-friendly error messages
- **Form Validation**: Required field validation
- **Responsive Grid**: Users displayed in responsive card grid
- **Edit Mode**: Inline editing with cancel functionality
- **Delete Confirmation**: Confirmation dialog before deletion
- **Empty State**: Helpful message when no users exist
- **Hover Effects**: Smooth transitions and hover states

## License

This project is open source and available under the [MIT License](LICENSE).