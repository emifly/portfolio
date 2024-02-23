import "./App.css"
import { projects } from "./data/projects"
import laptop from "./assets/laptop.png"

function App() {
  return (
    <main>
      <div className="about-me">
        <h1>Emily Flynn</h1>
        <p>Full-stack web developer</p>
        <img src={laptop} alt="Laptop" className="about-me-image" />
      </div>
      <div className="my-projects">
        {projects.map((project) => (
          <a href={project.link} className="project-tile">
            <div className="project-details">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}

export default App
