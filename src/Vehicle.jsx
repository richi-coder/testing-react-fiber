import { useEffect, useRef } from "react";
import Box from "./Box";
import Wheel from "./Wheel"
import { useBox, useCylinder, useRaycastVehicle } from "@react-three/cannon"

const width = 8;
const height = 4;
const front = width;
const back = width;
const radius = 0.7;

const wheelInfo = {
    axleLocal: [-1, 0, 0], // This is inverted for asymmetrical wheel models (left v. right sided)
    customSlidingRotationalSpeed: -30,
    dampingCompression: 4.4,
    dampingRelaxation: 10,
    directionLocal: [0, -1, 0], // set to same as Physics Gravity
    frictionSlip: 2,
    maxSuspensionForce: 1e4,
    maxSuspensionTravel: 0.3,
    radius: 5,
    suspensionRestLength: 0.3,
    suspensionStiffness: 30,
    useCustomSlidingRotationalSpeed: true,
  }

  const wheelInfo1 = {
    ...wheelInfo,
    chassisConnectionPointLocal: [-width / 2, height, front],
    isFrontWheel: true,
  }
  const wheelInfo2 = {
    ...wheelInfo,
    chassisConnectionPointLocal: [width / 2, height, front],
    isFrontWheel: true,
  }
  const wheelInfo3 = {
    ...wheelInfo,
    chassisConnectionPointLocal: [-width / 2, height, back],
    isFrontWheel: false,
  }
  const wheelInfo4 = {
    ...wheelInfo,
    chassisConnectionPointLocal: [width / 2, height, back],
    isFrontWheel: false,
  }

  const dimensions = [width, height, front * 2]

function Vehicle() {

    const wheels = [
        useCylinder(() => ({ mass: 1, args: [5,5,5,25], position: [-20,7,15], rotation: [Math.PI/2,0,0] }))[0],
        useCylinder(() => ({ mass: 1, args: [5,5,5,25], position: [-20,7,-15], rotation: [Math.PI/2,0,0] }))[0],
        useCylinder(() => ({ mass: 1, args: [5,5,5,25], position: [20,7,15], rotation: [Math.PI/2,0,0] }))[0],
        useCylinder(() => ({ mass: 1, args: [5,5,5,25], position: [20,7,-15], rotation: [Math.PI/2,0,0] }))[0]
    ]

    const [ chassis, chassisApi ] = useBox(() => ({
        mass: 1,
        position: [0,10,0],
        rotation: [0,0,0],
        args: dimensions
    }))

    const [ vehicle, vehicleApi ] = useRaycastVehicle(() => ({
        chassis,
        wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
        wheels
    }))

    useEffect(() => {
     setTimeout(() => {
        console.log('useeffect');
        vehicleApi.applyEngineForce(150,2)
        vehicleApi.applyEngineForce(150,3)
     }, 5000);
    }, [])
    

  return (
    <group ref={vehicle}>
        <Box chassisRef={chassis} dimensions={dimensions} />
        <Wheel wheelRef={wheels[0]} radius={radius} />
        <Wheel wheelRef={wheels[1]} radius={radius} />
        <Wheel wheelRef={wheels[2]} radius={radius} />
        <Wheel wheelRef={wheels[3]} radius={radius} />
    </group>
  )
}

export default Vehicle