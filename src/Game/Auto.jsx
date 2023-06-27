import { useEffect, useRef } from "react";
import Chassis from "./Chassis";
import Wheel from "./Wheel"
import { useBox, useRaycastVehicle } from "@react-three/cannon"
import useWheels from "./useWheels";
import useControls from "./useControls";
import { useFrame } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";
import { useVehicle } from "../Context/GameContext";


const width = 1.6;
const height = 0.4;
const front = width;
const back = width*1.2;
const radius = 0.5;
const dimensions = [width, height, front * 2]

function Auto({ fpCamera }) {
    const callVehicle = useVehicle()
    // chassis hook
    const [ chassisBody, chassisApi ] = useBox(
        () => ({
        allowSleep: false,
        mass: 1000,
        position: [0,1,0],
        rotation: [0,0,0],
        // onCollide: (e) => console.log('bonk', e.body.userData),
        args: dimensions
        }),
        useRef(null),
        );

    // custom wheels hook
    const [ wheels, wheelInfos ] = useWheels()

    // vehicle hook
    const [ vehicle, vehicleApi ] = useRaycastVehicle(
        () => ({
        chassisBody,
        wheelInfos,
        wheels,
        indexForwardAxis: 2,
        indexRightAxis: 0,
        indexUpAxis: 1
        }),
        useRef(null),
        );
    
    // custom controls hook
    useControls(vehicleApi, chassisApi)
    
    // render loop
    useFrame((state) => {
      // Updating dashboard
      chassisApi.velocity.subscribe((vel) => {
        callVehicle.updateVelocity(Math.floor(vel[2]))
      })
      // Checking sliding
      // vehicleApi.sliding.subscribe(slide => console.log(slide))
      if (!fpCamera) {
        let position = new Vector3(0,0,0);
        position.setFromMatrixPosition(chassisBody.current.matrixWorld);
        state.camera.lookAt(position);
        return
      }
        let position = new Vector3(0,0,0);
        position.setFromMatrixPosition(chassisBody.current.matrixWorld);

        let quaternion = new Quaternion(0, 0, 0, 0);
        quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

        let wDir = new Vector3(0,0,0);
        wDir.applyQuaternion(quaternion);
        wDir.normalize();

        let cameraPosition = position.clone().add(wDir.clone().multiplyScalar(1).add(new Vector3(0, 3, -5)));
        
        state.camera.position.copy(cameraPosition);
        // state.camera.quaternion.copy(quaternion)
        state.camera.lookAt(position)
        
    })


    
    useEffect(() => {
      window.addEventListener('keydown', (e) => resetGame(e))
      return () => window.addEventListener('keydown', (e) => resetGame(e))
      
    }, [])

    const resetGame = (e) => {
      if (e.key === 'r') {
        chassisApi.position.set(0,1,0)
        chassisApi.velocity.set(0,0,0)
        chassisApi.angularVelocity.set(0,0,0)
        chassisApi.rotation.set(0,0,0)
      }
    }
    
    
  return (
    <group ref={vehicle} name="vehicle">
        <Chassis chassisRef={chassisBody} dimensions={dimensions} name='chassisBody' />
        <Wheel wheelRef={wheels[0]} radius={radius} wheelNum={0} />
        <Wheel wheelRef={wheels[1]} radius={radius} wheelNum={1} />
        <Wheel wheelRef={wheels[2]} radius={radius} wheelNum={2} />
        <Wheel wheelRef={wheels[3]} radius={radius} wheelNum={3} />
    </group>
  )
}

export default Auto