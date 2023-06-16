import { useBox, useCompoundBody } from "@react-three/cannon";
import { useEffect } from "react";

function Wheel({ wheelRef, radius }) {
    // const [ wheel, wheelApi ] = useBox(() => ({
    //     mass: 10,
    //     position: [0,20,12],
    //     rotation: [Math.PI/2,0,0]
    // }))
 
    
    // wheelRef.current = wheel
    useCompoundBody(
        () => ({
          collisionFilterGroup: 0,
          mass: 1,
        //   material: 'wheel',
          shapes: [{ args: [radius, radius, 5, 16], rotation: [Math.PI/2, 0, 0], type: 'Cylinder' }],
          type: 'Kinematic',
        }),
        wheelRef,
      )

  return (
    <mesh ref={wheelRef}>
      <cylinderGeometry args={[7, 7, 5, 15]} />
      <meshBasicMaterial transparent={true} opacity={0.15} />
    </mesh>
  );
}

export default Wheel;
