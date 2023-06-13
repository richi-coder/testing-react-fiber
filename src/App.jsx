import { OrbitControls } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function App() {
  const gltfDelorian = useLoader(GLTFLoader, 'delorian/scene.gltf')
  const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')
  // const [xPosition, setXPosition] = useState(-350)
  const delorian = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setXPosition(xPosition + 0.05)
  //   }, 0.1);
  //   return
  // }, [xPosition])

  useFrame((state, delta) =>  (delorian.current.position.x += 5 ))
  

  return (
    <>
      
      <primitive object={gltfStreet.scene} position={[0,0,0]} rotation={[0,0,0]} scale={10} />
      <primitive ref={delorian} object={gltfDelorian.scene} position={[-350,-2,5]} rotation={[0,-7.9,0]} scale={0.12} />
      <OrbitControls />
    </>
  )
}

export default App
