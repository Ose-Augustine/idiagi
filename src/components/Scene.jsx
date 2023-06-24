import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader, useFrame } from "@react-three/fiber"
import {Stage, OrbitControls} from'@react-three/drei'
import { useRef } from "react"


export default function Scene() {
    const [colorMap] = useLoader(TextureLoader, [
        'public/textures/coast_sand_rocks_02_diff_4k.jpg',
    ])
    const ref = useRef(); 
    const color = '#b78135'
    useFrame(() => {
        ref.current.rotation.x += 0.001
        ref.current.rotation.y += 0.001

    })
    return (
        <>
            <hemisphereLight 
                skyColor= {color}
                groundColor={'#212121'}
                intensity={0.8} 
            />
            <OrbitControls />
                <mesh castShadows ref={ref}>
                    <sphereGeometry  />
                    <meshStandardMaterial 
                        map={colorMap}
                        bumpMap={colorMap}
                        castShadow={true}
                        //displacementMap={colorMap}
                    />
                </mesh>
        </>
                
    )
}