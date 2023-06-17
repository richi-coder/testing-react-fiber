import { useEffect, useState } from "react"

function useControls(vehicleApi, chassisApi) {
  const [controls, setControls] = useState(false)

  useEffect(() => {
    window.addEventListener('click', () => {
      setControls(true)
    })
    return () => {
      window.removeEventListener('click', () => {
        setControls(true)
      })
    }
  }, [])

  // useEffect(() => {
  //   if (controls) chassisApi.applyForce([500000,0,0],[0,0,0])
  // }, [controls, vehicleApi, chassisApi])
  
  

  return controls
}

export default useControls