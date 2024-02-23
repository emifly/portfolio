import "./App.css"
import { projects } from "./data/projects"

function App() {
  return (
    <main>
      <div className="about-me"></div>
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
