function Box({ chassisRef, dimensions }) {
    
  return (
    <mesh ref={chassisRef}>
        <boxGeometry args={dimensions} />
        <meshBasicMaterial color='blue' />
    </mesh>
  )
}

export default Box