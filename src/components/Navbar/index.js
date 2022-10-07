import './index.css'
import {Link} from 'react-router-dom'
import {NavHashLink} from 'react-router-hash-link'

const Navbar = () => {
    return(
        <div className='nav-bar'>
             <nav>

                {/* <NavHashLink className='inactiveNavHashLink' smooth to="/#about">About</NavHashLink>
                <NavHashLink className='inactiveNavHashLink' smooth to="/#projects">Projects</NavHashLink>
                <NavHashLink className='inactiveNavHashLink' smooth to="/#contact">Contact</NavHashLink>
                <Link className='resumeLink' to="/resume">Resume</Link> */}


                <NavHashLink className={(navData) => (checkActive(navData) ? 'activeNavHashLink' : 'inactiveNavHashLink')} smooth to="/#about">About</NavHashLink>
                <NavHashLink className={(navData) => (checkActive(navData) ? 'activeNavHashLink' : 'inactiveNavHashLink')}  smooth to="/#projects">Projects</NavHashLink>
                <NavHashLink className={(navData) => (checkActive(navData) ? 'activeNavHashLink' : 'inactiveNavHashLink')}  smooth to="/#contact">Contact</NavHashLink>
                <Link className='resumeLink' to="/resume">Resume</Link>
            </nav>

{/* TODO: Selective styling for when a link is active. */}
{/* Looks like someone else is having this exact issue. Posted very recently:

https://stackoverflow.com/questions/72518534/navhashlink-warning-react-does-not-recognize-the-isactive-prop-on-a-dom#new-answer */}
        </div>
    )
}

const checkActive = (match, location)=> {

    // Don't know how to get the match and location data here using 'react-router-hash-link', because using an isActive function was for react-router-dom, not react-router-hash-link...

    // https://stackoverflow.com/questions/47879663/root-navlink-always-get-active-class-react-router-dom

    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";
}

export default Navbar