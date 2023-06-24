import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader, useFrame } from "@react-three/fiber"
import { useRef } from "react"


export default function Scene() {
    const [colorMap, roughnessMap] = useLoader(TextureLoader, [
        'public/textures/coast_sand_rocks_02_diff_4k.jpg',
        'public/textures/coast_sand_rocks_02_disp_4k.png',
    ])
    const ref = useRef(); 
    useFrame(() => {
        ref.current.rotation.x += 0.001
    })
    return (
        <>
            <hemisphereLight 
                skyColor={'#ffffff'}
                groundColor={'#212121'}
                intensity= {0.8}
            />
            <mesh ref={ref}>
                <sphereGeometry />
                <meshStandardMaterial 
                    map={colorMap}
                    bumpMap={colorMap}
                    //displacementMap={colorMap}
                />
            </mesh>
        </>
    )
}