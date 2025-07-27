import './Header.css'

const Header = ({ onAuthClick }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>DWEL®</span>
        </div>
        
        <nav className="nav">
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#info" className="nav-link">INFO</a>
        </nav>
        
        <div className="auth-buttons">
          <button 
            className="auth-btn signin-btn"
            onClick={() => onAuthClick('signin')}
          >
            Sign-in
          </button>
          <button 
            className="auth-btn signup-btn"
            onClick={() => onAuthClick('signup')}
          >
            Sign-up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header