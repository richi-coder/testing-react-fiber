import { createContext, useContext, useState } from "react"

export const ContextGame = createContext();

export const useVehicle = () => {
    return useContext(ContextGame);
}

function GameContext({ children }) {
    
    const [velocity, setVelocity] = useState(0);

    const updateVelocity = (velocity) => {
        setVelocity(velocity)
    }

    const vehicleVelocity = {
        velocity,
        updateVelocity
    }

  return (
    <ContextGame.Provider value={vehicleVelocity}>
        {children}
    </ContextGame.Provider>
  )
}

export default GameContext