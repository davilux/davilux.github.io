import "./index.css"

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>&nbsp;&nbsp;&lt;div className= "projects" &gt;</h3>
      <div className="purple-box">
        <h1 className="top-right-h1">Projects</h1>
        {/* <h1 className='left-h1'>02</h1> */}
        <p>
          The site you're viewing right now is my portfolio. I designed it in
          Figma and built it using React, Material UI, and Heroku.
          <br />
          <br />
          This was my most ambitious design project to date, and I look forward
          to updating it over the years.
          <br />
          <br />
          {/* TODO: Link to GitHub for each project. */}
          <a href="/" className="gh-link">
            Check out the project GitHub.
          </a>
        </p>
        <div className="projects-container">
          <div className="project">
            <p>Webby</p>
          </div>
          <div className="project">
            <p>Magical Merchants</p>
          </div>
          <div className="project">
            <p>Portfolio</p>
          </div>
        </div>
      </div>
      <h3>&nbsp;&nbsp;&lt;/div&gt;</h3>
    </section>
  )
}

export default Projects
