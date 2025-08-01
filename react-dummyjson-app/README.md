# DummyJSON Explorer 🚀

A beautiful React application built with Vite and Tailwind CSS that showcases data from the DummyJSON API. This project demonstrates modern web development practices with a focus on beautiful UI/UX design.

## Features ✨

- **🏠 Home Page**: Overview of all categories with statistics
- **🛍️ Products**: Browse and search products with detailed views
- **🍽️ Recipes**: Discover recipes with ingredients and instructions
- **👥 Users**: Explore user profiles with comprehensive information
- **🔐 Login**: Beautiful authentication page (demo credentials included)
- **❌ 404 Error**: Custom error page with helpful navigation

## Tech Stack 🛠️

- **React 19** - Latest React with modern hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **DummyJSON API** - External API for demo data

## Project Structure 📁

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── LoadingSpinner.jsx
│   └── ErrorMessage.jsx
├── layout/             # Layout components
│   └── Layout.jsx
├── pages/              # Page components
│   ├── home/
│   ├── products/
│   ├── recipes/
│   ├── users/
│   ├── login/
│   └── error/
├── hooks/              # Custom React hooks
│   └── useApi.js
├── static/             # Static data and configuration
│   └── apiConfig.js
└── App.jsx             # Main application component
```

## Getting Started 🚀

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-dummyjson-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## API Integration 🌐

This application integrates with the [DummyJSON API](https://dummyjson.com) to fetch:

- **Products**: Product listings with images, prices, and details
- **Recipes**: Recipe data with ingredients and cooking instructions
- **Users**: User profiles with personal and professional information
- **Authentication**: Demo login functionality

## Features Overview 📋

### Pages (8 total: 5 main + 3 detail pages)

1. **Home Page** (`/`) - Overview with statistics
2. **Products Page** (`/products`) - Product listings with search
3. **Product Detail** (`/products/:id`) - Individual product details
4. **Recipes Page** (`/recipes`) - Recipe listings with search
5. **Recipe Detail** (`/recipes/:id`) - Recipe details with instructions
6. **Users Page** (`/users`) - User listings with search
7. **User Detail** (`/users/:id`) - User profile details
8. **Login Page** (`/login`) - Authentication (no header/footer)

### Error Handling

- **404 Error Page** - Custom error page for invalid routes
- **Loading States** - Beautiful loading spinners for all API calls
- **Error Messages** - User-friendly error messages with retry options

### Demo Credentials 🔑

For the login page, use these demo credentials:
- **Username**: `emilys`
- **Password**: `emilyspass`

## UI/UX Features 🎨

- **Responsive Design** - Works on all device sizes
- **Beautiful Animations** - Smooth transitions and hover effects
- **Modern Color Scheme** - Professional and appealing design
- **Accessibility** - Proper contrast and semantic HTML
- **Fast Loading** - Optimized images and code splitting

## Custom Hooks 🪝

- **useApi**: Custom hook for API calls with loading and error handling
- **useState**: React state management
- **useEffect**: Side effects and lifecycle management
- **useLocation**: Current route information
- **useRef**: DOM element references
- **useParams**: URL parameters for detail pages

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments 🙏

- [DummyJSON](https://dummyjson.com) for providing the API
- [React](https://react.dev) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS
- [Vite](https://vitejs.dev) for the fast build tool

---

**Happy Coding! 🎉**
