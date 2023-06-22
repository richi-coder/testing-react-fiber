import { useVehicle } from "../Context/GameContext"

function Dashboard() {
    const callVehicle = useVehicle();
  return (
    <div className='fixed top-0 left-0 bg-pink-500 text-white text-4xl px-5 py-5 z-50'>{callVehicle.velocity} km/h</div>
  )
}

export default Dashboard