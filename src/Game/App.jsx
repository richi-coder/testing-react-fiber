import { Debug, Physics } from "@react-three/cannon"
import { Environment, OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"
import Ground from "./Ground"
import Auto from "./Auto"

function App() {
  const [fpCamera, setFpCamera] = useState(false)
  // const [cameraPosition, setCameraPosition] = useState([-6, 13.9, 16.21]);

  

  useEffect(() => {
    const cameraPositioning = (e) => {
      if (e.key === 'k') {
        setFpCamera(!fpCamera)
      }
      return
    }
    
    window.addEventListener('keydown', e => cameraPositioning(e))
    return () => window.removeEventListener('keydown', e => cameraPositioning(e))
  }, [fpCamera])
  
  return (
    <Suspense fallback={null}>
      <Environment 
        files={'/textures/envmap.hdr'}
        background='only'
      />
      <Physics gravity={[0,-9.81,0]} stepSize={1/60} size={6} maxSubSteps={10}>
          <Debug>
            <Ground />
            <Auto fpCamera={fpCamera} />
          </Debug>
          {!fpCamera && (
          <OrbitControls target={[-2.64, -0.71, 0.03]} />
          )}
          <Stats />
      </Physics>
      
      
      
    </Suspense>
  )
}

export default App
