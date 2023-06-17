import { useEffect, useState } from "react"

function useControls(vehicleApi, chassisApi) {

  useEffect(() => {
    window.addEventListener('click', () => {
      console.log('clicking')
      vehicleApi.setSteeringValue(0.2,0)
      vehicleApi.setSteeringValue(0.2,1)
      vehicleApi.applyEngineForce(5000, 2)
      vehicleApi.applyEngineForce(5000, 3)
    })
  }, [])

}

export default useControls