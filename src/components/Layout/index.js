import "./index.css"
import { Welcome, Projects, About, Contact, Navbar, Footer } from "../index.js"

const Layout = () => {
  return (
    // TODO change main to a fragment and .site-body to main?
    <main>
      <Navbar />
      <section className="site-body">
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default Layout
