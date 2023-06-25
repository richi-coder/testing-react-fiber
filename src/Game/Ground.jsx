import { useBox, usePlane } from "@react-three/cannon"
import { useTexture } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

let width = 50
let length = 250

function Ground() {
    // const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')
    const [planeRef] = usePlane(() => ({ type: 'Static', args: [width, length], position: [0,0,0], rotation: [-Math.PI/2, 0, 0] }), useRef(null))
    const texture = useTexture('/textures/grid.png')
  return (
    // <primitive ref={ref} object={gltfStreet.scene}  scale={10} />
    <mesh ref={planeRef}>
      <planeGeometry args={[width, length]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default Ground