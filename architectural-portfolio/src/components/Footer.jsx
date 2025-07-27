import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p>© DWEL</p>
            <p>Powered by <a href="#" target="_blank" rel="noopener noreferrer">Webflow</a> .</p>
          </div>
          
          <div className="footer-center">
            <div className="footer-links">
              <a href="#" className="footer-link">Password</a>
              <a href="#" className="footer-link">404</a>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-links">
              <a href="#" className="footer-link">Licenses</a>
              <a href="#" className="footer-link">Style Guide</a>
              <a href="#" className="footer-link">Changelog</a>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer