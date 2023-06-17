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

  useEffect(() => {
    if (controls) vehicleApi.applyEngineForce(1500,2)
  }, [controls, vehicleApi, chassisApi])
  
  

  return (
    <div>useControls</div>
  )
}

export default useControls