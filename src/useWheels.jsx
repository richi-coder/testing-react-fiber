import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react"

const width = 16;
const height = 8;
const front = width;
const back = width*1.2;
const radius = 2.5;

function useWheels() {
    const wheels = new Array(4).fill(useRef(null))

    const wheelInfo = {
        axleLocal: [-1, 0, 0], // This is inverted for asymmetrical wheel models (left v. right sided)
        customSlidingRotationalSpeed: -30,
        dampingCompression: 4.4,
        dampingRelaxation: 10,
        directionLocal: [0, -1, 0], // set to same as Physics Gravity
        frictionSlip: 2,
        maxSuspensionForce: 1e4,
        maxSuspensionTravel: 0.3,
        radius,
        suspensionRestLength: 0.3,
        suspensionStiffness: 30,
        useCustomSlidingRotationalSpeed: true,
        rollInfluence: 0.01
      }

      const wheelInfo1 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width * 0.65, height, front],
        isFrontWheel: true,
      }
      const wheelInfo2 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [width * 0.65, height, front],
        isFrontWheel: true,
      }
      const wheelInfo3 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width * 0.65, height, back],
        isFrontWheel: false,
      }
      const wheelInfo4 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [width * 0.65, height, back],
        isFrontWheel: false,
      }

      const wheelInfos = [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4]

      const propsFunc = () => ({
        collisionFilterGroup: 0,
        mass: 1,
        material: 'wheel',
        shapes: [{ args: [radius, radius, 5, 25], rotation: [Math.PI/2, 0, 0], type: 'Cylinder' }],
        type: 'Kinematic',
      })

      useCompoundBody(propsFunc, wheels[0])
      useCompoundBody(propsFunc, wheels[1])
      useCompoundBody(propsFunc, wheels[2])
      useCompoundBody(propsFunc, wheels[3])

  return [wheels, wheelInfos]
}

export default useWheels