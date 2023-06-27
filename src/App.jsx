import { motion } from "framer-motion"
import Hero from "./components/Hero"
import About from "./pages/About"
import Body from "./components/Body"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
function App() {
  
  return (
   <>
      <Router>
        <nav className="absolute z-20 text-white flex justify-evenly w-full text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/body">Body</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/body" element={<Body />} />
        </Routes>
      </Router>
   </>
  )
}

export default App
