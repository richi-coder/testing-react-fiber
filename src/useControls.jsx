import { useEffect, useState } from "react"

function useControls(vehicleApi, chassisApi) {
  const throttleForce = -5000;
  const brakeForce = 30;

  const accelerateBrake = (e) => {
    console.log(typeof e.key)
    if (e.key == 'w') {
      vehicleApi.setBrake(0, 0)
      vehicleApi.setBrake(0, 1)
      vehicleApi.setBrake(0, 2)
      vehicleApi.setBrake(0, 3)
      vehicleApi.applyEngineForce(throttleForce, 2)
      vehicleApi.applyEngineForce(throttleForce, 3)
      return
    }
    if (e.key == 's') {
     
      // Checking vehicle speed
      let totalVel = 0;
      chassisApi.velocity.subscribe((vel) => {
        totalVel = vel.reduce((acum, value) => acum + value, 0)
      })
        
        // if (Math.abs(totalVel) > 1) {
          vehicleApi.setBrake(brakeForce, 0)
          vehicleApi.setBrake(brakeForce, 1)
          vehicleApi.setBrake(brakeForce*0.7, 2)
          vehicleApi.setBrake(brakeForce*0.7, 3)
        // } else {
        //   vehicleApi.setBrake(0, 0)
        //   vehicleApi.setBrake(0, 1)
        //   vehicleApi.setBrake(0, 2)
        //   vehicleApi.setBrake(0, 3)
        //   vehicleApi.applyEngineForce(-throttleForce/3, 2)
        //   vehicleApi.applyEngineForce(-throttleForce/3, 3)
        // }
      
      return
    }
    if (e.key === 'a') {
      vehicleApi.setSteeringValue(Math.PI/6,0)
      vehicleApi.setSteeringValue(Math.PI/6,1)
      return
    }
    if (e.key === 'd') {
      vehicleApi.setSteeringValue(-Math.PI/6,0)
      vehicleApi.setSteeringValue(-Math.PI/6,1)
      return
    }
    return
  }

  const freeControls = (e) => {
    if (e.key === 'w') {
    vehicleApi.applyEngineForce(0,0)
    vehicleApi.applyEngineForce(0,1)
    vehicleApi.applyEngineForce(0,2)
    vehicleApi.applyEngineForce(0,3)
    return
    }
    if (e.key === 's') {
    vehicleApi.setBrake(0,0)
    vehicleApi.setBrake(0,1)
    vehicleApi.setBrake(0,2)
    vehicleApi.setBrake(0,3)
    return
    }
    if (e.key === 'a' || e.key === 'd') {
    vehicleApi.setSteeringValue(0,0)
    vehicleApi.setSteeringValue(0,1)
    vehicleApi.setSteeringValue(0,2)
    vehicleApi.setSteeringValue(0,3)
    return
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => accelerateBrake(e))
    window.addEventListener('keyup', (e) => freeControls(e))
    return () => {
      window.removeEventListener('keydown', (e) => accelerateBrake(e))
      window.removeEventListener('keyup', freeControls)
    }
    
  }, [])

}

export default useControls