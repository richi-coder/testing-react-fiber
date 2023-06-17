import { useRef } from "react";
import Box from "./Box";
import Wheel from "./Wheel"
import { useBox, useRaycastVehicle } from "@react-three/cannon"
import useWheels from "./useWheels";
import useControls from "./useControls";
import { useFrame } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";


const width = 16;
const height = 2;
const front = width;
const back = width*1.2;
const radius = 5;
const dimensions = [front * 2, height, width]

function Auto() {
    
    const [ chassis, chassisApi ] = useBox(
        () => ({
        allowSleep: false,
        mass: 150,
        // position: [0,10,0],
        args: dimensions
        }),
        useRef(null),
        );

    const [ wheels, wheelInfos ] = useWheels()

    const [ vehicle, vehicleApi ] = useRaycastVehicle(
        () => ({
        chassis,
        wheelInfos,
        wheels
        }),
        useRef(null),
        );
    
    useControls(vehicleApi, chassisApi)

    // useFrame((state) => {
    
    //     let position = new Vector3(0,0,0);
    //     position.setFromMatrixPosition(chassis.current.matrixWorld);
    
    //     let quaternion = new Quaternion(0, 0, 0, 0);
    //     quaternion.setFromRotationMatrix(chassis.current.matrixWorld);
    
    //     let wDir = new Vector3(0,0,1);
    //     wDir.applyQuaternion(quaternion);
    //     wDir.normalize();
    
    //     let cameraPosition = position.clone().add(wDir.clone().multiplyScalar(1).add(new Vector3(0, 3, 0)));
        
    //     wDir.add(new Vector3(0, 0.2, 0));
    //     state.camera.position.copy(cameraPosition);
    //     state.camera.lookAt(position);
    //   });
        
    

  return (
    <group ref={vehicle} name="vehicle">
        <Box chassisRef={chassis} dimensions={dimensions} name='chassis' />
        <Wheel wheelRef={wheels[0]} radius={radius} />
        <Wheel wheelRef={wheels[1]} radius={radius} />
        <Wheel wheelRef={wheels[2]} radius={radius} />
        <Wheel wheelRef={wheels[3]} radius={radius} />
    </group>
  )
}

export default Auto