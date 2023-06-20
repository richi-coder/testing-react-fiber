import { useSphere } from "@react-three/cannon"

function Sphere() {
    const sphere = useSphere(() => ({ mass: 1, args: [5,20,20], position: [0,10,0] }))
  return (
    <mesh ref={sphere}>
        <sphereGeometry />
        <meshBasicMaterial color='orange' />
    </mesh>
  )
}

export default Sphere