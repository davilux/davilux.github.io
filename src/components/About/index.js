import "./index.css"
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const About = () => {

  class Page {
    constructor(text){
      this.text = text
    }
  }

  const pages = [
    new Page(`I'm Davi Lux, 28 year old non-binary software engineer.\n\n\nMy mission is to use technology to make the world a better place.`),
    new Page(`Before I fell in love with code, I was a professional artist.\n\n\nI'm a maker, and my ideas inform my learning. You can often find me awake late at night, studying a technique that will allow me to bring a vision to life.`),
    new Page(`I LOVE learning and teaching. My passions include queer issues, equity, communication, and consent.\n\n\n In my free time, I volunteer as an Event Lead at the Chicago Full Moon Jam, a community organization dedicated to supporting the fire spinning community. I'm also on the Consent Team for Great Lakes Flow Retreat.`),
    new Page(`Technologies I've been working with recently:\n\nJavaScript (ES6+)\nNode.js\nReact\nRedux\nExpress\nPostgreSQL\nSequelize\nHTML5\nCSS3\nD3\nMocha/Chai\nPostman\nGit/GitHub\nHeroku\nAdobe Illustrator`)
  ]

  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {if(currentPage < pages.length - 1) setCurrentPage(currentPage + 1)}
  const prevPage = () => {if(currentPage > 0) setCurrentPage(currentPage - 1)}

  return (
    <section id="about" className="about">
      <h3>&nbsp;&nbsp;&lt;section className= "about"&gt;</h3>
      <div className="purple-box">
        <h1 className="top-left-h1">About</h1>
        {/* <h1 className="right-h1">01</h1> */}
        <h2>My pronouns are they/them.</h2>


        <section className="about-pages-container">
          <div>
          <ArrowBackIosIcon onClick={prevPage} className={currentPage<=0 ? "transparent-icon" : "opaque-icon"}/>
          </div>
          <p>{pages[currentPage].text}</p>
          <br />
          <br />
          <ArrowForwardIosIcon onClick={nextPage} className={currentPage >= pages.length -1 ? "transparent-icon" : "opaque-icon"}/>
        </section>
      </div>
      <h3>&nbsp;&nbsp;&lt;/section&gt;</h3>
    </section>
  )
}

export default About

//TODO: Link to a gallery of my artwork.
