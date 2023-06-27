import { container, itemsLeft, itemsRight } from "./animation"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Body() {
    const ref = useRef(); 
    const inView = useInView(ref, {once: true}); 
    const mainControls = useAnimation(); 
    
    useEffect(() => {
        if(inView) {
            mainControls.start("show")
        }
    }, [inView])
  return (
    <article className="h-screen bg-orange-200 w-screen  text-[#212121] bg-center bg-cover">
        <section className="border-2 border-black text-3xl text-center p-20 lg:p-40 bg-orange-200 ">
            We enrich human lives through the thoughtful application of design and technology
        </section>
        <motion.section
            ref={ref} 
            variants= {container} initial="hidden" animate={mainControls}
            style={{backgroundImage: "url('/bloodmoon.jpg')"}}
            className="border-2  border-black text-white bg-center bg-cover ">
            <div className="h-full lg:m-16 lg:text-3xl ">
            <div className="flex w-full h-96  lg:my-24">
                <motion.img variants={itemsLeft} className="w-1/2 object-cover border-2 border-orange-200 rounded-xl"src="/forestpath.jpg" alt="" />
                <motion.p variants={itemsRight} className="p-14 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus ea voluptates ex amet illo. the name of the man was added to this</motion.p>
            </div>
            <div className="flex w-full h-96 lg:my-24">
                <motion.p variants={itemsRight} className="p-14 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In animi non architecto odio officiis? Sapiente?</motion.p>
                <motion.img variants={itemsLeft} className="w-1/2 object-cover border-2 border-orange-200 rounded-xl" src="/shrubsunset.jpg" alt="" />
            </div>
            <div className="flex w-full h-96 lg:my-24">
                <motion.img variants={itemsLeft} className="w-1/2 object-cover border-2 border-orange-200 rounded-lg"src="/waterfall.jpg" alt="" />
                <motion.p variants={itemsRight} className="p-14 w-1/2 border-green-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem exercitationem modi pariatur ex. Asperiores?</motion.p>
            </div>
            </div>
        </motion.section>
     
    </article>
  )
}


