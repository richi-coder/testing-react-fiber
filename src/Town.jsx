import { useBox, usePlane } from "@react-three/cannon"
import { useTexture } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Town() {
    // const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')
    const [planeRef] = useBox(() => ({ type: 'Static', args: [20,0.5,50], position: [0,0,0], rotation: [0, 0, 0] }), useRef(null))
    const texture = useTexture('/textures/grid.png')
  return (
    // <primitive ref={ref} object={gltfStreet.scene}  scale={10} />
    <mesh ref={planeRef}>
      <boxGeometry args={[20,0.5,50]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default Town