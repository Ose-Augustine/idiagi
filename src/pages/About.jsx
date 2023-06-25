import { motion } from "framer-motion";

export default function About() {
     return (
        <motion.div className="h-screen  bg-cover bg-left"
        initial = {{opacity:0}}
        style={{backgroundImage: "url('/skyscraper.jpg')"}}
        animate = {{opacity:1}}
        transition={{duration:0.75 , ease: "easeIn"}}
        ></motion.div>
     )
}