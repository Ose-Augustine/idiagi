import { motion } from "framer-motion";
import { container, items } from "../components/animation";
export default function About() {
     return (
        <motion.div className="h-screen  bg-cover bg-left flex flex-col justify-center lg:items-center"
        initial = {{opacity:0}}
        style={{backgroundImage: "url('/skyscraper.jpg')"}}
        animate = {{opacity:1}}
        transition={{duration:0.75 , ease: "easeIn"}}
        >
            <motion.div className="border-4 border-red-500 h-3/4 relative text-white text-lg grid grid-cols-2 lg:w-1/2 gap-36 lg:gap-x-72"variants={container} initial="hidden" animate="show">
                <motion.div className="overflow-hidden border-green-400 border-4" variants={items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veritatis.</motion.div>
                <motion.div className="overflow-hidden  border-green-500 border-4" variants={items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veritatis.</motion.div >
                <motion.div className="overflow-hidden" variants={items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ex?</motion.div>
                <motion.div className="overflow-hidden " variants={items}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae.</motion.div>
            </motion.div>

        </motion.div>
     )
}