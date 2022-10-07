import './index.css'
import { Welcome, Projects, About, Contact } from '../index.js'

const Layout = () =>{
    return(
        <main className="wrapper">
            <Welcome />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}

export default Layout