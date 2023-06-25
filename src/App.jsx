import { motion } from "framer-motion"
import Hero from "./components/Hero"
import About from "./pages/About"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  
  return (
   <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
   </>
  )
}

export default App
