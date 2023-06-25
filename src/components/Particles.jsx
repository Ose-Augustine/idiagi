import * as THREE from "three"; 
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader} from "@react-three/fiber"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


function AddStar() {
    const [x, y ,z ] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(2))
    const [texture] = useLoader(TextureLoader, [
        'public/textures/coral_fort_wall_02_diff_4k.jpg'
    ])
    
    return (
        <>
            <mesh 
                position={[x,y,z]}
            >
                <sphereGeometry args={[0.02,24,24]}/>
                <meshStandardMaterial
                    map={texture}
                    bumpMap={texture}
                />
            </mesh>
        
        </>
    )
}
const stars = Array(500).fill().map(() => (<AddStar />))

export default function Particles() {
    const ref = useRef(); 
    useFrame(({ clock}) => {
        ref.current.rotation.x *= clock.getDelta(); 
    })
    return (
        <group ref={ref}>
            {stars}
        </group>
    )
}