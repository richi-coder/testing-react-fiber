import { useBox } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


function Car() {
    const gltfDelorian = useLoader(GLTFLoader, 'delorian/scene.gltf')
    const [ref, api] = useBox(() => ({ mass: 1, position: [-350,15,5] }))

    

  return (
    <primitive ref={ref} object={gltfDelorian.scene}  rotation={[0,-7.9,0]} scale={0.12} />
  )
}

export default Car