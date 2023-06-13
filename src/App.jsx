import { OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function App() {
  const gltfDelorian = useLoader(GLTFLoader, 'delorian/scene.gltf')
  const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')


  return (
    <Canvas camera={{ position: [500,50,-500] }} frameloop="demand">
      <ambientLight intensity={0.5}/>
      <directionalLight color='red' position={[0,0,5]} />
      <primitive object={gltfStreet.scene} position={[0,0,0]} scale={10} />
      <primitive object={gltfDelorian.scene} position={[15,-2,5]} rotation={[0,8,0]} scale={0.12} />
      <OrbitControls />
    </Canvas>
  )
}

export default App
