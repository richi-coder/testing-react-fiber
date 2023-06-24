function Chassis({ chassisRef, dimensions }) {
    
  return (
    <group ref={chassisRef}>
      <mesh position={[0,0,0]}>
          <boxGeometry args={dimensions} />
          <meshBasicMaterial transparent={true} opacity={0.7} color='red' />
      </mesh>
    </group>
  )
}

export default Chassis