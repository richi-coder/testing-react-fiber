import { createContext, useContext, useRef, useState } from "react"

export const ContextGame = createContext();

export const useVehicle = () => {
    return useContext(ContextGame);
}

function GameContext({ children }) {
    const velocity = useRef();
    velocity.current = 0;
    // const [velocity, setVelocity] = useState(0);

    const updateVelocity = (vel) => {
        velocity.current = vel
    }

    const vehicleVelocity = {
        velocity: velocity.current,
        updateVelocity
    }

  return (
    <ContextGame.Provider value={vehicleVelocity}>
        {children}
    </ContextGame.Provider>
  )
}

export default GameContext