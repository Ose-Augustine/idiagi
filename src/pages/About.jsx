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
            <motion.div className=" h-3/4 relative text-white text-lg grid grid-cols-2 lg:w-2/3 gap-36  [&>*]:border-2 [&>*]:border-blue-100 [&>*]:rounded-xl col"variants={container} initial="hidden" animate="show">
                <motion.div className="overflow-hidden lg:text-xl p-2 lg:w-72" variants={itemsLeft}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veritatis. 
                    this is the name of the man since no lorem was found
                </motion.div>
                <motion.div className="overflow-hidden lg:w-72 lg:text-xl p-2" variants={itemsRight}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veritatis.
                    this is the name of the man since no lorem was found
                </motion.div >
                <motion.div className="overflow-hidden lg:w-72 lg:text-xl p-2" variants={itemsLeft}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ex? 
                    this is the name of the man since no lorem was found
                </motion.div>
                <motion.div className="overflow-hidden lg:w-72 lg:text-xl p-2" variants={itemsRight} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae. 
                    this is the name of the man since no lorem was found
                </motion.div>
            </motion.div>
        </motion.div>
     )
}