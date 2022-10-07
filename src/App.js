import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home, Navbar, About, Contact, Layout } from './components/index'

function App() {
  return (
    <>
      <Navbar />
      <Layout />
      {/* <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </ Routes> */}

        <div id="about" style={{height:1000}}>
          <p>About</p>
        </div>
        <div id="projects">
          <p>Projects</p>
        </div>
        <div id="contact">
          <p>Contact</p>
        </div>
    </>
  );
}

export default App;
