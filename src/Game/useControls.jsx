import { useEffect, useState } from "react"

let steerAngle = 0;
let maxSteerAngle = Math.PI/6;

function useControls(vehicleApi, chassisApi) {
  
  const throttleForce = -15000;
  const brakeForce = 500;
  

  const vehicleControls = (e) => {
    let time = Date.now()
    let velo = 0
    
    if (e.key == 'w') {
      vehicleApi.applyEngineForce(throttleForce, 2)
      vehicleApi.applyEngineForce(throttleForce, 3)
      
      return
    }
    if (e.key == 's') {
      vehicleApi.setBrake(brakeForce, 0)
      vehicleApi.setBrake(brakeForce, 1)
      vehicleApi.setBrake(brakeForce*0.7, 2)
      vehicleApi.setBrake(brakeForce*0.7, 3)
      return
    }
        
        if (e.key == 'a') {
          steerAngle = deltaSteer(steerAngle)
          vehicleApi.setSteeringValue(steerAngle,0)
          vehicleApi.setSteeringValue(steerAngle,1)
          return
        }
        if (e.key == 'd') {
          steerAngle = deltaSteer(steerAngle)
          vehicleApi.setSteeringValue(-steerAngle,0)
          vehicleApi.setSteeringValue(-steerAngle,1)
          return
        }
  }

  const deltaSteer = (steerAngle) => {
    steerAngle = maxSteerAngle
    steerAngle = steerAngle <= maxSteerAngle ? steerAngle : maxSteerAngle
    return steerAngle
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
      steerAngle = 0;
      vehicleApi.setSteeringValue(0,0)
      vehicleApi.setSteeringValue(0,1)
      return
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', vehicleControls)
    window.addEventListener('keyup', freeControls)
    
    return () => {
      window.removeEventListener('keydown', vehicleControls)
      window.removeEventListener('keyup', freeControls)
    }
    
  }, [])

}

export default useControls