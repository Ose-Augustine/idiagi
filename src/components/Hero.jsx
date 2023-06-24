import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"

export default function Hero() {
    const [colorMap, roughnessMap] = useLoader(TextureLoader, [
        'public/textures/coast_sand_rocks_02_diff_4k.jpg',
        'public/textures/coast_sand_rocks_02_disp_4k.png',
    ])
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
                    <hemisphereLight 
                        skyColor={'#ffffff'}
                        groundColor={'#212121'}
                        intensity= {0.8}
                    />
                    {/* <directionalLight color='red' position={[0,0,5]}/> */}
                    <mesh>
                        <sphereGeometry />
                        <meshStandardMaterial 
                            map={colorMap}
                            bumpMap={colorMap}
                            //displacementMap={colorMap}
                        />
                    </mesh>
                </Canvas>
            </section>
        </motion.article>
    )
}