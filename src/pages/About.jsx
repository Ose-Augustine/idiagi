import { motion } from "framer-motion";
import { container, items } from "../components/animation";
export default function About() {
     return (
        <motion.div className="h-screen  bg-cover bg-left"
        initial = {{opacity:0}}
        style={{backgroundImage: "url('/skyscraper.jpg')"}}
        animate = {{opacity:1}}
        transition={{duration:0.75 , ease: "easeIn"}}
        >
            <motion.div variants={container} initial="hidden" animate="show">
                <motion.div className="overflow-hidden" variants={items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sapiente.</motion.div>
                <motion.div className="overflow-hidden" variants={items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veritatis.</motion.div >
                <motion.div className="overflow-hidden" variants={items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ex?</motion.div>
                <motion.div className="overflow-hidden" variants={items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae.</motion.div>
            </motion.div>

        </motion.div>
     )
}