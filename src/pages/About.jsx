import { motion } from "framer-motion";
import { container, itemsLeft, itemsRight } from "../components/animation";
export default function About() {
     return (
        <motion.div className="h-screen  bg-cover bg-left flex flex-col justify-center lg:items-center"
        initial = {{opacity:0}}
        style={{backgroundImage: "url('/skyscraper.jpg')"}}
        animate = {{opacity:1}}
        transition={{duration:0.75 , ease: "easeIn"}}
        >
            <motion.div className=" h-3/4 relative text-white text-lg grid grid-cols-2 lg:w-1/2 gap-36 lg:gap-x-72"variants={container} initial="hidden" animate="show">
                <motion.div className="overflow-hidden " variants={itemsLeft}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veritatis. 
                    this is the name of the man since no lorem was found
                </motion.div>
                <motion.div className="overflow-hidden" variants={itemsRight}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veritatis.
                    this is the name of the man since no lorem was found
                </motion.div >
                <motion.div className="overflow-hidden" variants={itemsLeft}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ex? 
                    this is the name of the man since no lorem was found
                </motion.div>
                <motion.div className="overflow-hidden " variants={itemsRight} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae. 
                    this is the name of the man since no lorem was found
                </motion.div>
            </motion.div>
        </motion.div>
     )
}