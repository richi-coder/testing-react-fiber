import { Debug, Physics } from "@react-three/cannon"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import Car from "./Car"
import Town from "./Town"
import Box from "./Box"
import Auto from "./Auto"

function App() {
  
  return (
    <>
      <Physics gravity={[0,-9.81,0]} broadphase="SAP">
        <Debug>
          <Town />
          <Auto />
        </Debug>
      </Physics>
      <OrbitControls />
    </>
  )
}

export default App
