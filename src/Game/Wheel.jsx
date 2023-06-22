function Wheel({ wheelRef, radius, wheelNum }) {

  return (
    <group ref={wheelRef}>
        <mesh rotation={[0, 0, Math.PI/2]}>
            <cylinderGeometry args={[radius, radius, 0.5, 35]} />
            <meshBasicMaterial transparent={true} color='blue' />
        </mesh>
    </group>
  );
}

export default Wheel;
