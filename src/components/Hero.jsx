import { motion } from "framer-motion"
import { Canvas} from "@react-three/fiber"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Sphere from "./Sphere"
import Particles from "./Particles"

export default function Hero() {
    
    return (
        <motion.article
            className="bg-[#212121] h-screen text-white  flex justify-evenly w-screen"
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            transition={{duration:0.75 , ease: "easeIn"}}
        >
            <section className="py-56 w-1/2">
                <div className="text-6xl lg:text-8xl">idiagi and sons</div>
                <small className="text-lg lg:text-xl">Engineering and technical services</small>
            </section>
            <section className="w-1/2">
                <Canvas shadows>
                    <Sphere />
                    <Particles />
                </Canvas>
            </section>
        </motion.article>
    )
}