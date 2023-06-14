import { Physics } from "@react-three/cannon"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import Car from "./Car"
import Town from "./Town"

function App() {
  
  
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
      <Town />
      <Car />
      </Physics>
      <OrbitControls />
    </>
  )
}

export default App
