import { useEffect, useState } from "react"

function useControls(vehicleApi, chassisApi) {
  const throttleForce = 1000000;
  const brakeForce = 500;

  const accelerateBrake = (e) => {
    console.log(typeof e.key)
    if (e.key == 'w') {
      vehicleApi.applyEngineForce(throttleForce, 2)
      vehicleApi.applyEngineForce(throttleForce, 3)
      vehicleApi.setBrake(0, 0)
      vehicleApi.setBrake(0, 1)
      vehicleApi.setBrake(0, 2)
      vehicleApi.setBrake(0, 3)
    }
    if (e.key == 's') {
      vehicleApi.setBrake(brakeForce, 0)
      vehicleApi.setBrake(brakeForce, 1)
      vehicleApi.setBrake(brakeForce*0.7, 2)
      vehicleApi.setBrake(brakeForce*0.7, 3)
      vehicleApi.applyEngineForce(0, 2)
      vehicleApi.applyEngineForce(0, 3)
    }
  }
  // const brake = (e) => {
  //   alert()
  //  if (e.key === 'space') {
  //   vehicleApi.setBrake(50000, 0)
  //   vehicleApi.setBrake(50000, 1)
  //  }
  // }

  useEffect(() => {
    window.addEventListener('keydown', (e) => accelerateBrake(e))
    window.addEventListener('keyup', (e) => accelerateBrake(e))
    // return () => window.removeEventListener('keydown', (e) => accelerate(e))
    // return () => window.removeEventListener('keyup', (e) => brake(e))
  }, [])

}

export default useControls