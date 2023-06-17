import { useEffect, useRef } from "react";
import Box from "./Box";
import Wheel from "./Wheel"
import { useBox, useCylinder, useRaycastVehicle } from "@react-three/cannon"
import useWheels from "./useWheels";


const width = 16;
const height = 8;
const front = width;
const back = width*1.2;
const radius = 2.5;
const dimensions = [front * 2, height, width]

function Vehicle() {
    const [ chassis, chassisApi ] = useBox(
        () => ({
        mass: 100,
        position: [0,10,0],
        rotation: [0,0,0],
        args: dimensions
        }),
        useRef(null))

    const [ wheels, wheelInfos ] = useWheels()

    const [ vehicle, vehicleApi ] = useRaycastVehicle(
        () => ({
        chassis,
        wheelInfos,
        wheels
        }),
        useRef(null))

    useEffect(() => {
    window.addEventListener('click', () => {
        vehicleApi.applyEngineForce(1500,3)
    })
        
    }, [vehicleApi, chassisApi])
    

  return (
    <group ref={vehicle} name="vehicle">
        <Box chassisRef={chassis} dimensions={dimensions} />
        <Wheel wheelRef={wheels[0]} radius={radius} />
        <Wheel wheelRef={wheels[1]} radius={radius} />
        <Wheel wheelRef={wheels[2]} radius={radius} />
        <Wheel wheelRef={wheels[3]} radius={radius} />
    </group>
  )
}

export default Vehicle