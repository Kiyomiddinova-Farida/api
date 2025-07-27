import { useState } from 'react'
import Modal from './Modal'
import './AuthModal.css'

const AuthModal = ({ type, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(`${type} form submitted:`, formData)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div className="auth-modal">
        <div className="auth-header">
          <h2>{type === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
          <p>{type === 'signin' ? 'Welcome back to DWEL' : 'Join the DWEL community'}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {type === 'signup' && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {type === 'signup' && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {type === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {type === 'signin' 
              ? "Don't have an account? " 
              : "Already have an account? "
            }
            <button 
              className="auth-switch-btn"
              onClick={() => {
                // Switch between signin and signup
                window.location.hash = type === 'signin' ? 'signup' : 'signin'
              }}
            >
              {type === 'signin' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default AuthModal