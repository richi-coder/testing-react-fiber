let debug = false;

function Wheel({ wheelRef, radius }) {

  return (
    <group ref={wheelRef}>
        <mesh rotation={[0, 0, Math.PI/2]}>
            <cylinderGeometry args={[radius, radius, 5, 25]} />
            <meshBasicMaterial transparent={true} color='blue' />
        </mesh>
    </group>
  );
}

export default Wheel;
