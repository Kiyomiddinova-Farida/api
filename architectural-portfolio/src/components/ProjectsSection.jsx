import './ProjectsSection.css'

const ProjectsSection = ({ onImageClick }) => {
  const projects = [
    {
      id: 1,
      title: "Village Pt",
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      description: "A modern village point development featuring sustainable architecture and natural integration."
    },
    {
      id: 2,
      title: "Franklin",
      src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&h=400&fit=crop",
      description: "Waterfront residential project combining luxury living with environmental consciousness."
    },
    {
      id: 3,
      title: "Henderson",
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop",
      description: "Contemporary residential design featuring clean lines and open-plan living."
    },
    {
      id: 4,
      title: "Hazelwood",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
      description: "Family home design emphasizing natural light and outdoor connectivity."
    },
    {
      id: 5,
      title: "Martin St",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      description: "Urban residential project incorporating sustainable materials and energy-efficient design."
    },
    {
      id: 6,
      title: "Concord",
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
      description: "Luxury residential development with modern amenities and landscape integration."
    },
    {
      id: 7,
      title: "Houston St",
      src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop",
      description: "Contemporary urban design featuring innovative use of space and natural materials."
    },
    {
      id: 8,
      title: "Hillsboro",
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
      description: "Modern hillside residence designed to complement the natural topography."
    },
    {
      id: 9,
      title: "Willow Ave",
      src: "https://images.unsplash.com/photo-1600607688960-e095e31023f4?w=600&h=400&fit=crop",
      description: "Minimalist residential design emphasizing geometric forms and natural lighting."
    },
    {
      id: 10,
      title: "Brentwood",
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&h=400&fit=crop",
      description: "Traditional meets modern in this thoughtfully designed family residence."
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => onImageClick(project)}
            >
              <div className="project-image">
                <img src={project.src} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-title">{project.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection