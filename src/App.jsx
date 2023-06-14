import { Physics, useBox } from "@react-three/cannon"
import { OrbitControls } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Car from "./Car"

function App() {
  
  const gltfStreet = useLoader(GLTFLoader, 'street/scene.gltf')
  // const [xPosition, setXPosition] = useState(-350)
  const delorian = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setXPosition(xPosition + 0.05)
  //   }, 0.1);
  //   return
  // }, [xPosition])

  // useFrame((state, delta) =>  {
  //   delorian.current.position.x += 5
  //   state.camera.position.x = delorian.current.position.x;
  // })

  
  

  return (
    <>
      <Physics>
      <primitive object={gltfStreet.scene} position={[0,0,0]} rotation={[0,0,0]} scale={10} />
      <Car />
      </Physics>
      <OrbitControls />
    </>
  )
}

export default App
