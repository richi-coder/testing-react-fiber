import { useEffect, useState } from "react"

function useControls(vehicleApi, chassisApi) {

  useEffect(() => {
    window.addEventListener('click', () => {
      console.log('clicking')
      vehicleApi.applyEngineForce(500000, 2)
      vehicleApi.applyEngineForce(500000, 3)
    })
  }, [])

}

export default useControls