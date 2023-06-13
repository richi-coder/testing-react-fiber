import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


function App() {
  const gltf = useLoader(GLTFLoader, 'scene.gltf')
  return (
    <Canvas camera={{ position: [-200,100,-500],}} frameloop="demand">
      <ambientLight intensity={0.1}/>
      <directionalLight color='red' position={[0,0,5]} />
      <primitive object={gltf.scene} position={[0,0,0]}/>
    </Canvas>
    
  )
}

export default App
