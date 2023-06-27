import { container, itemsLeft, itemsRight } from "./animation"
import { motion } from "framer-motion"

export default function Body() {
  return (
    <article className="h-screen bg-orange-200 w-screen  text-[#212121] bg-center bg-cover">
        <section className="border-2 border-black text-3xl text-center p-20 lg:p-40 bg-orange-200 ">
            We enrich human lives through the thoughtful application of design and technology
        </section>
        <motion.section 
            variants= {container} initial="hidden" animate="show"
            style={{backgroundImage: "url('/bloodmoon.jpg')"}}
            className="h-screen border-2 border-black text-white bg-center bg-cover">
            <div className="flex w-full h-1/3 border-orange-200 border-dotted border-2 mb-20">
                <motion.img variants={itemsLeft} className="w-1/2 object-cover"src="/forestpath.jpg" alt="" />
                <motion.p variants={itemsRight} className="p-14 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus ea voluptates ex amet illo.</motion.p>
            </div>
            <div className="flex w-full h-1/3">
                <motion.p variants={itemsRight} className="p-14">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In animi non architecto odio officiis? Sapiente?</motion.p>
                <motion.img variants={itemsLeft} className="w-1/2 object-cover" src="/shrubsunset.jpg" alt="" />
            </div>
            <div className="flex w-full h-1/3">
                <motion.img variants={itemsLeft} className="w-1/2 object-cover"src="/waterfall.jpg" alt="" />
                <motion.p variants={itemsRight} className="p-14 w-1/2 border-green-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem exercitationem modi pariatur ex. Asperiores?</motion.p>
            </div>
        </motion.section>
     
    </article>
  )
}


