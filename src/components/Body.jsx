import { container, itemsLeft, itemsRight } from "./animation"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Body() {
    const [refA, refB, refC] = [useRef(), useRef(), useRef()]; 
    const AinView = useInView(refA, {once: true}); 
    const BinView = useInView(refB, {once: true}); 
    const CinView = useInView(refC, {once: true}); 

    const mainControlsA = useAnimation(); 
    const mainControlsB = useAnimation(); 
    const mainControlsC = useAnimation(); 

    
    useEffect(() => {
        if(AinView) {
            mainControlsA.start("show")
        }if(BinView) {
            mainControlsB.start("show");
        }if(CinView) {
            mainControlsC.start("show");
        }
    }, [AinView,BinView,CinView])
  return (
    <article className="h-screen bg-orange-200 w-screen  text-[#212121] bg-center bg-cover">
        <section className="border-2 border-black text-3xl text-center p-20 lg:p-40 bg-orange-200 lg:text-6xl">
            We enrich human lives through the thoughtful application of design and technology
        </section>
        <section
            style={{backgroundImage: "url('/bloodmoon.jpg')"}}
            className="border-2  border-black text-white bg-center bg-cover ">
            <div className="h-full lg:m-16 lg:text-3xl ">
                <motion.div className="flex w-full h-96  lg:my-24" 
                    ref={refA}
                    variants= {container} initial="hidden" animate={mainControlsA}
                >
                    <motion.img variants={itemsLeft} className="w-1/2 object-cover border-2 border-orange-200 rounded-xl"src="/forestpath.jpg" alt="" />
                    <motion.p variants={itemsRight} className="p-14 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus ea voluptates ex amet illo. the name of the man was added to this</motion.p>
                </motion.div>
                <motion.div className="flex w-full h-96 lg:my-24 " 
                    ref={refB}
                    variants= {container} initial="hidden" animate={mainControlsB}
                >
                    <motion.p variants={itemsRight} className="p-14 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In animi non architecto odio officiis? Sapiente?</motion.p>
                    <motion.img variants={itemsLeft} className="w-1/2 object-cover border-2 border-orange-200 rounded-xl" src="/shrubsunset.jpg" alt="" />
                </motion.div>
                <motion.div className="flex w-full h-96 lg:my-24" 
                    variants= {container} initial="hidden" animate={mainControlsC}
                    ref={refC}
                >
                    <motion.img variants={itemsLeft} className="w-1/2 object-cover border-2 border-orange-200 rounded-lg"src="/waterfall.jpg" alt="" />
                    <motion.p variants={itemsRight} className="p-14 w-1/2 border-green-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem exercitationem modi pariatur ex. Asperiores?</motion.p>
                </motion.div>
            </div>
        </section>
     
    </article>
  )
}


