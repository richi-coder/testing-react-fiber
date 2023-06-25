import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Game/App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { getGPUTier } from 'detect-gpu';
import GameContext from './Context/GameContext.jsx'
import Dashboard from './GUI/Dashboard.jsx'

// (async () => {
//   const gpuTier = await getGPUTier();
//     console.log(gpuTier);
//   // Example output:
//   // {
//   //   "tier": 1,
//   //   "isMobile": false,
//   //   "type": "BENCHMARK",
//   //   "fps": 21,
//   //   "gpu": "intel iris graphics 6100"
//   // }
// })();

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameContext>
    {/* <Dashboard /> */}
    <Canvas  frameloop="always">
        <App />
        {/* <ambientLight intensity={0}/>
        <directionalLight color='red' position={[0,0,5]} /> */}
    </Canvas>
  </GameContext>
)
