function Wheel({ wheelRef, radius }) {

  return (
    <group ref={wheelRef}>
        <mesh rotation={[Math.PI/2,0,0]}>
            <cylinderGeometry args={[radius, radius, 5, 25]} />
            <meshBasicMaterial transparent={true} opacity={0.15} />
        </mesh>
    </group>
  );
}

export default Wheel;
