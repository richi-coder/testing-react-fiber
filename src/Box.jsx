function Box({ chassisRef, dimensions }) {
    
  return (
    <group ref={chassisRef}>
      <mesh>
          <boxGeometry args={dimensions} />
          <meshBasicMaterial transparent={true} opacity={0.7} color='red' />
      </mesh>
    </group>
  )
}

export default Box