import "./index.css"
import { Welcome, Projects, About, Contact, Navbar, Footer } from "../index.js"

const Layout = () => {
  return (
    <main className="layout">
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
