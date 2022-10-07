import './index.css'
import { Welcome, Projects, About, Contact} from '../index.js'

const Layout = () =>{
    return(
        <main className='layout'>
            <Welcome />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}

export default Layout