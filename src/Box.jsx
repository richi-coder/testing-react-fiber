function Box({ boxRef }) {
    
  return (
    <mesh ref={boxRef}>
        <boxGeometry args={[45,2,10]} />
        <meshBasicMaterial color='blue' />
    </mesh>
  )
}

export default Box