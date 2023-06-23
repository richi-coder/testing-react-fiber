import { Debug, Physics } from "@react-three/cannon"
import { Environment, OrbitControls } from "@react-three/drei"
import { useEffect, useState } from "react"
import Town from "./Town"
import Auto from "./Auto"

function App() {
  const [fpCamera, setFpCamera] = useState(false)
  const cameraPositioning = (e) => {
    if (e.key === 'k') setFpCamera(!fpCamera)
  }

  useEffect(() => {
    window.addEventListener('keydown', e => cameraPositioning(e))
    return () => window.removeEventListener('keydown', e => cameraPositioning(e))
  }, [fpCamera])
  
  return (
    <>
      <Environment 
        files={'/textures/envmap.hdr'}
        background='only'
      />
      <Physics gravity={[0,-9.81,0]} broadphase="SAP">
        <Debug>
          <Town />
          <Auto fpCamera={fpCamera} />
          {/* <Sphere /> */}
        </Debug>
      </Physics>
      <OrbitControls />
    </>
  )
}

export default App