import "./index.css"
import FolderIcon from "@mui/icons-material/Folder"
import FolderOpenIcon from "@mui/icons-material/FolderOpen"
import { useState } from 'react';

class Project {
  constructor(name, id, description, ghLink, deployedLink){
    this.name = name;
    this.id = id;
    this.description = description;
    this.ghLink = ghLink;
    this.deployedLink = deployedLink;
  }
}

const Projects = () => {

  const portfolioSite = new Project('Portfolio', 'portfolioSite',
  `The site you're viewing right now is my portfolio. I designed it in Figma and built it using React, Material UI, and Heroku. I look forward to updating it over the years.`, 'https://github.com/davilux/portfolio-site')

  const webby = new Project('Webby', 'webby', 'Webby is a social app designed to connect people to engage in hobbies together.', 'https://github.com/THEM-exclamationpoint/Webby', 'https://webby-social.netlify.app/')

  const magicalMerchants = new Project('Magical Merchants', 'magicalMerchants', 'An e-commerce store selling magical items.', 'https://github.com/Magical-Merchants/magicalMerchants2.0', 'http://magical-merchants.herokuapp.com/')

  const allProjects = [webby, magicalMerchants, portfolioSite]

  const getProjectById = function(id){
    return allProjects.filter((p)=> p.id === id )[0]
  }

  const [currentProject, setCurrentProject] = useState(portfolioSite)

  return (
    <section id="projects" className="projects">
      <h3>&nbsp;&nbsp;&lt;section className= "projects"&gt;</h3>
      <div className="purple-box">
        <h1 className="top-right-h1">Projects</h1>
        {/* <h1 className='left-h1'>02</h1> */}
        <p>
          {currentProject.description}<br /><br />
          <a href={currentProject.ghLink} className="gh-link" target="_blank" rel="noreferrer noopener">Project GitHub</a><br /><br />
          {currentProject.deployedLink && <a href={currentProject.deployedLink} className="gh-link" target="_blank" rel="noreferrer noopener">Deployed site</a> }
        </p>
        <div className="projects-container">

          {allProjects.map((p)=> {
            return (
              <div className="project" id={p.id} key={p.id} onClick={(e) => {
                const current = getProjectById(e.target.id)
                setCurrentProject(current)
              }}>
                {currentProject.name === p.name ? <FolderOpenIcon /> : <FolderIcon />}
                <span>{p.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <h3>&nbsp;&nbsp;&lt;/section&gt;</h3>
    </section>
  )
}

export default Projects


//Any of the project icons/names can be clicked to display more information about that project.

//Project object contains name, info, ghLink and deployedLink.

//currently selected project has an open folder icon.


//TODO: Create line spaces within descriptions.
//TODO: Make it possible to click anywhere on the project div to select a given project
