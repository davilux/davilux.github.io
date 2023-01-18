import './index.css'
import {Link, useLocation} from 'react-router-dom'
import {NavHashLink} from 'react-router-hash-link'

const Navbar = () => {
    let location = useLocation();

    return(
        <div className='nav-bar'>
             <nav>
                <NavHashLink className={`${location.pathname}${location.hash}` === '/#about' ? "activeNavHashLink" : "inactiveNavHashLink"} smooth to="/#about">About</NavHashLink>
                <NavHashLink className={`${location.pathname}${location.hash}` === '/#projects' ? "activeNavHashLink" : "inactiveNavHashLink"}  smooth to="/#projects">Projects</NavHashLink>
                <NavHashLink className={`${location.pathname}${location.hash}` === '/#contact' ? "activeNavHashLink" : "inactiveNavHashLink"}  smooth to="/#contact">Contact</NavHashLink>

                <Link className='resumeLink' to="/resume">Resume</Link>
            </nav>
        </div>

        // TODO: Make sure link becomes active/inactive when you scroll to/away from a section (not just when you click a link)
    )
}

export default Navbar
