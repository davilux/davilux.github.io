import "./index.css"

const About = () => {
  return (
    <section id="about" className="about">
      <h3>&nbsp;&nbsp;&lt;div className= "about" &gt;</h3>
      <div className="purple-box">
        <h1 className="top-left-h1">About</h1>
        {/* <h1 className="right-h1">01</h1> */}
        <h2>My pronouns are they/them.</h2>
        <p>
          I'm Davi Lux, 27 year old non-binary software engineer.
          <br />
          <br />
          Former professional artist, current aspiring cyborg.
          <br />
          <br />
          <br />
          Technologies I've been working with recently:
        </p>
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
      </div>
      <h3>&nbsp;&nbsp;&lt;/div&gt;</h3>
    </section>
  )
}

export default About
