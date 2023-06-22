import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react"

const width = 1.6;
const height = 0.4;
const front = width;
const back = width*1.2;
const radius = 0.25;
export const ackerman = 0.05;

function useWheels() {
    const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const wheelInfo = {
        radius: radius *2,
        directionLocal: [0, -1, 0],
        
        suspensionStiffness: 30,
        suspensionRestLength: 0.4,
        frictionSlip: 1.7,
        dampingRelaxation: 2.3,
        dampingCompression: 4.4,
        maxSuspensionForce: 100000,
        rollInfluence: 0.1,
        maxSuspensionTravel: 0.3,
        customSlidingRotationalSpeed: -30,  
        useCustomSlidingRotationalSpeed: true,
      }

      const wheelInfo1 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width, 0.5, front*1.5],
        isFrontWheel: true,
        axleLocal: [-Math.cos(ackerman), 0, Math.sin(ackerman)],
      }
      const wheelInfo2 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [width, 0.5, front*1.5],
        isFrontWheel: true,
        axleLocal: [Math.cos(ackerman), 0, Math.sin(ackerman)],
      }
      const wheelInfo3 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width, 0.5, -front],
        isFrontWheel: false,
        axleLocal: [-1, 0, 0],
      }
      const wheelInfo4 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [width, 0.5, -front],
        isFrontWheel: false,
        axleLocal: [-1, 0, 0],
      }

      const wheelInfos = [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4]

      const propsFunc = (wheelNum) => ({
        collisionFilterGroup: 0,
        mass: 10,
        material: 'wheel',
        shapes: [
          {
            args: [radius*2, radius*2, 0.5, 25],
            rotation: [0, wheelNum == 0 ? ackerman : wheelNum == 1 ? -ackerman : 0, Math.PI/2],
            type: 'Cylinder',
          }
        ],
        type: 'Kinematic',
      })

      useCompoundBody(() => propsFunc(0), wheels[0])
      useCompoundBody(() => propsFunc(1), wheels[1])
      useCompoundBody(() => propsFunc(2), wheels[2])
      useCompoundBody(() => propsFunc(3), wheels[3])

  return [wheels, wheelInfos]
}

export default useWheels