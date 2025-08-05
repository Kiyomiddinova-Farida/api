# Student CRUD Application

A simple React TypeScript application demonstrating CRUD operations with "lifting state up" principle.

## Features

- **Create**: Add new students
- **Read**: View list of students  
- **Update**: Edit existing student information
- **Delete**: Remove students from the list

## Architecture

The application follows the "lifting state up" principle:
- **Main Component (App.tsx)**: Contains all state and CRUD logic
- **FormControl Component**: Handles form input for adding/editing students
- **StudentView Component**: Displays the list of students

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Usage

1. Fill out the form to add a new student
2. Click "Add Student" to create a new entry
3. Use "Edit" button to modify existing student data
4. Use "Delete" button to remove a student (with confirmation)
5. Cancel edit mode using the "Cancel" button
