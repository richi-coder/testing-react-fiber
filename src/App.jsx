import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


function App() {
  const gltf = useLoader(GLTFLoader, 'scene.gltf')
  return (
    <Canvas camera={{ position: [500,500,500]}}>
      <ambientLight intensity={0.1}/>
      <directionalLight color='red' position={[0,0,5]} />
      <primitive object={gltf.scene} />
    </Canvas>
    
  )
}

export default App
