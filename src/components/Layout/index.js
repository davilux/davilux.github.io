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
      {/* TODO: Implement dark mode and light mode. Turn on footer and include a toggle here. */}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
