import "./index.css"
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PageOne = () => {
  return <p>
    I'm Davi Lux, 28 year old non-binary software engineer.
    <br />
    <br />
    Former professional artist, current aspiring cyborg.
    <br />
    <br />
  </p>
}


const PageTwo = () => {
  return <p>
          <p>Technologies I've been working with recently:</p>
          <div className="technologies-container">
            <p>
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
            </p>
            <p>
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
            </p>
            <p>
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
            </div>
          </p>
}

const About = () => {
  const pages = [
    PageOne(), PageTwo()
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
          <ArrowBackIosIcon onClick={prevPage} className={currentPage<=0 ? "transparent-icon" : "opaque-icon"}/>
          {pages[currentPage]}
          <ArrowForwardIosIcon onClick={nextPage} className={currentPage >= pages.length -1 ? "transparent-icon" : "opaque-icon"}/>
        </section>
      </div>
      <h3>&nbsp;&nbsp;&lt;/section&gt;</h3>
    </section>
  )
}

export default About
