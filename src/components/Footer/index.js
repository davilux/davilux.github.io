import './index.css'
import {NavHashLink} from 'react-router-hash-link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <section className='footer'>
            {/* <h3 className='darkmode'>darkMode = true;</h3> */}
            <a href="https://www.linkedin.com/in/davilux/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://github.com/davilux" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <NavHashLink className="inactiveNavHashLink"  smooth to="/#contact"><EmailIcon/></NavHashLink>
        </section>
    )
}

export default Footer
