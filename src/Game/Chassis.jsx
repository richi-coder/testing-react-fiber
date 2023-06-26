import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three-stdlib"

function Chassis({ chassisRef, dimensions }) {
  const delorian = useLoader(GLTFLoader, '/delorian/scene.gltf')
    
  return (
    <group ref={chassisRef}>
      {/* <mesh position={[0,0,0]}>
          <boxGeometry args={dimensions} />
          <meshBasicMaterial transparent={true} opacity={0.7} color='red' />
      </mesh> */}
      <primitive object={delorian.scene} scale={0.015} position={[1.5,-0.3,-1.5]} rotation={[0, Math.PI, 0]} />
    </group>
  )
}

export default Chassis