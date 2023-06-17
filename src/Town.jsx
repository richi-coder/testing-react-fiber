import { useBox, usePlane } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Town() {
    const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')
    const [ref] = useBox(() => ({ type: 'Static', position: [0,0,0], args: [2000,0,2000], rotation: [0,0,0] }))
  return (
    <primitive ref={ref} object={gltfStreet.scene}  scale={10} />
  )
}

export default Town