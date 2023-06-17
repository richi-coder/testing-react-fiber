import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react"

const width = 16;
const height = 8;
const front = width;
const back = width*1.2;
const radius = 2.5;

function useWheels() {
    const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const wheelInfo = {
        radius,
        directionLocal: [0, -1, 0],
        axleLocal: [-1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        frictionSlip: 1.4,
        dampingRelaxation: 2.3,
        dampingCompression: 4.4,
        maxSuspensionForce: 100000,
        rollInfluence: 0.5,
        maxSuspensionTravel: 0.3,
        customSlidingRotationalSpeed: -30,  
        useCustomSlidingRotationalSpeed: true,
      }

      const wheelInfo1 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width * 0.8, 4, front],
        isFrontWheel: true,
      }
      const wheelInfo2 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [width * 0.8, 4, front],
        isFrontWheel: true,
      }
      const wheelInfo3 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width * 0.8, 4, -back],
        isFrontWheel: false,
      }
      const wheelInfo4 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [width * 0.8, 4, -back],
        isFrontWheel: false,
      }

      const wheelInfos = [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4]

      const propsFunc = () => ({
        collisionFilterGroup: 0,
        mass: 1,
        // material: 'wheel',
        shapes: [
          {
            args: [radius, radius, 5, 25],
            rotation: [Math.PI/2, 0, 0],
            type: 'Cylinder',
          }
        ],
        type: 'Kinematic',
      })

      useCompoundBody(propsFunc, wheels[0])
      useCompoundBody(propsFunc, wheels[1])
      useCompoundBody(propsFunc, wheels[2])
      useCompoundBody(propsFunc, wheels[3])

  return [wheels, wheelInfos]
}

export default useWheels