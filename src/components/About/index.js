import "./index.css"
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PageOne = () => {
  return <p>
    I'm Davi Lux, 28 year old non-binary software engineer.
    <br />
    <br />
    My mission is to use technology to make the world a better place.
  </p>
}

const PageTwo = () => {
  return <p> Before I fell in love with code, I was a professional artist.
    <br />
    <br />
    I'm a maker, and my ideas inform my learning. You can often find me awake late at night, studying a technique that will allow me to bring a vision to life.
         </p>
}

const PageThree = () => {
  return <p> This is another page!
         </p>
}

const PageFour = () => {
  return <p> Technologies I've been working with recently:
              <br />
              <br />
              JavaScript (ES6+)
              <br />
              Node.js
              <br />
              React
              <br />
              Redux
              <br />
              Express
              <br />
              PostgreSQL
              <br />
              Sequelize
              <br />
              HTML5
              <br />
              CSS3
              <br />
              D3
              <br />
              Mocha/Chai
              <br />
              Postman
              <br />
              Git/GitHub
              <br />
              Heroku
              <br />
              Adobe Illustrator
              <br />
          </p>
}

const About = () => {
  const pages = [
    PageOne(), PageTwo(), PageThree(), PageFour()
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
          {pages[currentPage]}
          <ArrowForwardIosIcon onClick={nextPage} className={currentPage >= pages.length -1 ? "transparent-icon" : "opaque-icon"}/>
        </section>
      </div>
      <h3>&nbsp;&nbsp;&lt;/section&gt;</h3>
    </section>
  )
}

export default About
