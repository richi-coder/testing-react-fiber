import { OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function App() {
  const gltfDelorian = useLoader(GLTFLoader, 'delorian/scene.gltf')
  const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')
  const [xPosition, setXPosition] = useState(-350)

  useEffect(() => {
    setTimeout(() => {
      setXPosition(xPosition + 0.05)
    }, 0.1);
    return
  }, [xPosition])
  

  return (
    <Canvas camera={{ position: [-400,15,-40] }} frameloop="demand">
      <ambientLight intensity={0.5}/>
      <directionalLight color='red' position={[0,0,5]} />
      <primitive object={gltfStreet.scene} position={[0,0,0]} rotation={[0,0,0]} scale={10} />
      <primitive object={gltfDelorian.scene} position={[xPosition,-2,5]} rotation={[0,-7.9,0]} scale={0.12} />
      <OrbitControls />
    </Canvas>
  )
}

export default App
