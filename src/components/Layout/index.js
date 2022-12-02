import "./index.css"
import { Welcome, Projects, About, Contact, Navbar, Footer } from "../index.js"

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Layout
