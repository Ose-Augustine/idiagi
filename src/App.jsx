import { motion } from "framer-motion"
import Hero from "./components/Hero"
import About from "./pages/About"
import Body from "./components/Body"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  
  return (
   <>
      <Router>
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
