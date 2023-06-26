import { useCompoundBody, useContactMaterial } from "@react-three/cannon";
import { useRef } from "react"

const width = 1.3;
const height = 0.4;
const front = width;
const back = width*1.2;
const radius = 0.25;


function useWheels() {
    const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const contact = useContactMaterial();
    
    const wheelInfo = {
        radius: radius *2,
        directionLocal: [0, -1, 0],
        axleLocal: [-1, 0, 0],
        suspensionStiffness: 30,
        suspensionRestLength: 0.4,
        frictionSlip: 1.7,
        dampingRelaxation: 2.3,
        dampingCompression: 4.4,
        maxSuspensionForce: 100000,
        rollInfluence: 0.01,
        maxSuspensionTravel: 0.4,
        customSlidingRotationalSpeed: -30,  
        useCustomSlidingRotationalSpeed: true,
      }

      const wheelInfo1 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width, 0.5, front*1.87],
        isFrontWheel: true,
      }
      const wheelInfo2 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [width, 0.5, front*1.87],
        isFrontWheel: true,
      }
      const wheelInfo3 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width, 0.5, -front],
        isFrontWheel: false,
      }
      const wheelInfo4 = {
        ...wheelInfo,
        chassisConnectionPointLocal: [width, 0.5, -front],
        isFrontWheel: false,
      }

      const wheelInfos = [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4]

      const propsFunc = () => ({
        collisionFilterGroup: 0,
        mass: 10,
        material: 'wheel',
        shapes: [
          {
            args: [radius*2, radius*2, 0.5, 15],
            rotation: [0, 0, Math.PI/2],
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