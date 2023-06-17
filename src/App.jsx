import { Physics } from "@react-three/cannon"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import Car from "./Car"
import Town from "./Town"
import Box from "./Box"
import Auto from "./Auto"

function App() {
  
  
  // const [xPosition, setXPosition] = useState(-350)
  const delorian = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setXPosition(xPosition + 0.05)
  //   }, 0.1);
  //   return
  // }, [xPosition])

  

  return (
    <>
      <Physics gravity={[0,-9.81,0]} broadphase="SAP">
        <Town />
        {/* <Car /> */}
        {/* <Box /> */}
        <Auto />
      </Physics>
      <OrbitControls />
    </>
  )
}

export default App
