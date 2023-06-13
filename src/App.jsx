import * as STDLIB from 'three-stdlib'
// Flatbundle
import { OrbitControls } from 'three-stdlib'
import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function App() {
  const gltfDelorian = useLoader(GLTFLoader, 'delorian/scene.gltf')
  const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')


  return (
    <Canvas camera={{ position: [500,50,-500] }} frameloop="demand">
      <ambientLight intensity={0.1}/>
      <directionalLight color='red' position={[0,0,5]} />
      <primitive object={gltfStreet.scene} position={[0,0,0]} scale={100} />
      <primitive object={gltfDelorian.scene} position={[0,0,0]}/>
    </Canvas>
  )
}

export default App
