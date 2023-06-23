import { Debug, Physics } from "@react-three/cannon"
import { Environment, OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"
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
    <Suspense fallback={null}>
      <Environment 
        files={'/textures/envmap.hdr'}
        background='only'
      />
      <Physics gravity={[0,-9.81,0]}  defaultContactMaterial={{ contactEquationStiffness: 10 }} >
        <Debug>
          <Town />
          <Auto fpCamera={fpCamera} />
          {/* <Sphere /> */}
        </Debug>
      </Physics>
      <Stats />
      <OrbitControls />
    </Suspense>
  )
}

export default App
