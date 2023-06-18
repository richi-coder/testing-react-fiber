import { useEffect, useRef } from "react";
import Box from "./Box";
import Wheel from "./Wheel"
import { useBox, useRaycastVehicle } from "@react-three/cannon"
import useWheels from "./useWheels";
import useControls from "./useControls";
import { useFrame } from "@react-three/fiber";


const width = 16;
const height = 4;
const front = width;
const back = width;
const radius = 5;
const dimensions = [width, height, front * 2]

function Auto() {
    
    const [ chassisBody, chassisApi ] = useBox(
        () => ({
        allowSleep: false,
        mass: 1500,
        position: [0,10,0],
        onCollide: (e) => console.log('bonk', e.body.userData),
        args: dimensions
        }),
        useRef(null),
        );

    const [ wheels, wheelInfos ] = useWheels()

    const [ vehicle, vehicleApi ] = useRaycastVehicle(
        () => ({
        chassisBody,
        wheelInfos,
        wheels
        }),
        useRef(null),
        );
    
    useControls(vehicleApi, chassisApi)

    // useFrame((state) => {
    //     chassisApi.position.subscribe((position) => state.camera.x = position.x)
    // })
    
  return (
    <group ref={vehicle} name="vehicle">
        <Box chassisRef={chassisBody} dimensions={dimensions} name='chassisBody' />
        <Wheel wheelRef={wheels[0]} radius={radius} />
        <Wheel wheelRef={wheels[1]} radius={radius} />
        <Wheel wheelRef={wheels[2]} radius={radius} />
        <Wheel wheelRef={wheels[3]} radius={radius} />
    </group>
  )
}

export default Auto