import { useBox } from "@react-three/cannon"
import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


function Car() {
    const gltfDelorian = useLoader(GLTFLoader, 'delorian/scene.gltf')
    const [carBody, carApi] = useBox(() => ({ mass: 1000, position: [-350,25,5], rotation: [0,-7.9,0], args: [3,2,3] }))

    // useFrame((state, delta) =>  {
    //     // carApi.applyForce([10000,0,0],[10,0,0])
    //     // state.camera.position.x = delorian.current.position.x;
    //     })


  return (
    <primitive ref={carBody} object={gltfDelorian.scene} scale={0.1} />
  )
}

export default Car