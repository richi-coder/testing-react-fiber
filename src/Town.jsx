import { useBox, usePlane } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Town() {
    const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')
    // const [ref] = useBox(() => ({ type: 'Static', position: [0,0,0], args: [2000,0,2000], rotation: [0,0,0] }))
    const [planeRef] = usePlane(() => ({ type: 'Static', position: [0,0,0], rotation: [-Math.PI / 2, 0, 0] }), useRef(null))
  return (
    // <primitive ref={ref} object={gltfStreet.scene}  scale={10} />
    <mesh ref={planeRef}>
      <planeGeometry args={[100,100]} />
      <meshBasicMaterial color='gray' />
    </mesh>
  )
}

export default Town