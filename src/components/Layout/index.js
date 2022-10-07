import './index.css'

const Layout = () =>{
    return(
        <div className="wrapper">
            <section className='welcome'>
                <h3>&lt;body&gt;</h3>
                <h3>&lt;div&gt;</h3>

                    <h1>Davi Lux</h1>
                <h3>&lt;/div&gt;</h3>
            </section>
            <section id="about" className='about'>
                <h3>&lt;div className= "about" &gt;</h3>

                <h1>About</h1>
                <h3>&lt;/div&gt;</h3>
            </section>
            <section id="projects" className='projects'>
                <h3>&lt;div className= "projects" &gt;</h3>

                <h1>Projects</h1>
                <h3>&lt;/div&gt;</h3>
            </section>
            <section id="contact" className='contact'>
                <h3>&lt;form&gt;</h3>

                <h1>Contact</h1>
                <h3>&lt;/form&gt;</h3>
                <h3>&lt;/body&gt;</h3>
                <h3>&lt;/html&gt;</h3>
            </section>
        </div>
    )
}

export default Layout