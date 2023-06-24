import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { useEffect } from "react"

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
            <section className="w-1/2">
                <Canvas>
                    <ambientLight intensity={0.1} />
                    <directionalLight color='red' position={[0,0,5]}/>
                    <mesh>
                        <sphereGeometry />
                        <meshStandardMaterial />
                    </mesh>
                </Canvas>
            </section>
        </motion.article>
    )
}