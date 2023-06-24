import { motion } from "framer-motion"
import { Canvas} from "@react-three/fiber"
import Scene from "./Scene"
import { useRef } from "react"

export default function Hero() {
    
    return (
        <motion.article
            className="bg-[#212121] h-screen text-white  flex justify-evenly w-screen"
            initial = {{y: "100%"}}
            animate = {{y:"0%"}}
            transition={{duration:0.75 , ease: "easeIn"}}
        >
            <section className="py-56 w-1/2">
                <div className="text-6xl lg:text-8xl">idiagi and sons</div>
                <small className="text-lg lg:text-xl">Engineering and technical services</small>
            </section>
            <section className="w-1/2 border-4 border-red-500 ">
                <Canvas shadows>
                    <Scene />
                </Canvas>
            </section>
        </motion.article>
    )
}