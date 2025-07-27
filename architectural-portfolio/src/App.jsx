import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import Modal from './components/Modal'
import AuthModal from './components/AuthModal'
import './App.css'

function App() {
  const [showImageModal, setShowImageModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authType, setAuthType] = useState('signin') // 'signin' or 'signup'

  const handleImageClick = (imageData) => {
    setSelectedImage(imageData)
    setShowImageModal(true)
  }

  const handleAuthClick = (type) => {
    setAuthType(type)
    setShowAuthModal(true)
  }

  return (
    <div className="App">
      <Header onAuthClick={handleAuthClick} />
      <HeroSection />
      <ProjectsSection onImageClick={handleImageClick} />
      <Footer />
      
      {showImageModal && (
        <Modal onClose={() => setShowImageModal(false)}>
          <div className="image-modal">
            <img src={selectedImage?.src} alt={selectedImage?.title} />
            <div className="image-modal-content">
              <h3>{selectedImage?.title}</h3>
              <p>{selectedImage?.description}</p>
            </div>
          </div>
        </Modal>
      )}

      {showAuthModal && (
        <AuthModal 
          type={authType}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </div>
  )
}

export default App
