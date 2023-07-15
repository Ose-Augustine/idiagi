import * as THREE from "three"; 
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader} from "@react-three/fiber"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


function AddStar(props) {
    const [x, y ,z ] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(2))
    return (
        <>
            <mesh 
                position={[x,y,z]}
            >
                <sphereGeometry args={[0.02,24,24]}/>
                <meshStandardMaterial
                    map={props.texture}
                    bumpMap={props.texture}
                />
            </mesh>
        
        </>
    )
}

export default function Particles(props) {
    const ref = useRef(); 
    const ref2 = useRef(); 
    const rotateSpeedX = props.x
    const rotateSpeedY = props.y

    useFrame(({ clock }) => {
        let time = clock.getDelta(); 
        ref.current.rotation.x += time*rotateSpeedX; 
        ref2.current.rotation.y += time*rotateSpeedY; 
    })
    const texture = useLoader(TextureLoader, '/textures/coral_fort_wall_02_diff_4k.jpg')
    const stars = Array(500).fill()
    let key = 0;
    return (
       <>
         <group ref={ref}>
            {
                stars.map(() => (<AddStar key={key++} texture={texture} />))
            }
        </group>
        <group ref={ref2}>
            {
                stars.map(() => (<AddStar key={key++} texture={texture} />))
            }
        </group>
       </>
        
    )
}