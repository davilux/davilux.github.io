import './index.css'
import {Link, useLocation} from 'react-router-dom'
import {NavHashLink} from 'react-router-hash-link'


const Navbar = () => {

    // // location is used for conditional styling
    // let location = useLocation();

    return(
        <div className='nav-bar'>
             <nav>

                {/* The following code works to change the color of links when active via click. However, it still does not update when a link is made active via scroll. For now, I'm leaving all navlinks styled as if inactive */}
                {/* <NavHashLink className={`${location.pathname}${location.hash}` === '/#about' ? "activeNavHashLink" : "inactiveNavHashLink"} smooth to="/#about">About</NavHashLink>
                <NavHashLink className={`${location.pathname}${location.hash}` === '/#projects' ? "activeNavHashLink" : "inactiveNavHashLink"}  smooth to="/#projects">Projects</NavHashLink>
                <NavHashLink className={`${location.pathname}${location.hash}` === '/#contact' ? "activeNavHashLink" : "inactiveNavHashLink"}  smooth to="/#contact">Contact</NavHashLink> */}

                <NavHashLink className="inactiveNavHashLink" smooth to="/#about">About</NavHashLink>
                <NavHashLink className="inactiveNavHashLink"  smooth to="/#projects">Projects</NavHashLink>
                <NavHashLink className="inactiveNavHashLink"  smooth to="/#contact">Contact</NavHashLink>

                <Link className='resumeLink' to="/resume">Resume</Link>
            </nav>
        </div>

        // TODO: Make sure link becomes active/inactive when you scroll to/away from a section (not just when you click a link)

        //I think I can use document.querySelector("#about").getBoundingClientRect()) to check the bounds of an element and compare them to the current viewport.
    )
}

export default Navbar
