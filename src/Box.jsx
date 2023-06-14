import { useBox } from '@react-three/cannon'
import React from 'react'

function Box() {
    const [box, boxApi] = useBox(() => ({ mass: 1, position: [-360,15,15]}))
  return (
    <mesh ref={box}>
        <boxGeometry args={[5,5,20]} />
        <meshBasicMaterial color='blue' />
    </mesh>
  )
}

export default Box