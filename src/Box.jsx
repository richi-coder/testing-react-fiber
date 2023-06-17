function Box({ chassisRef, dimensions }) {
    
  return (
    <group ref={chassisRef}>
      <mesh>
          <boxGeometry args={dimensions} />
          <meshBasicMaterial transparent={true} opacity={0.3} color='blue' />
      </mesh>
    </group>
  )
}

export default Box