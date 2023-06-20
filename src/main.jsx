import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { getGPUTier } from 'detect-gpu';

(async () => {
  const gpuTier = await getGPUTier();
    console.log(gpuTier);
  // Example output:
  // {
  //   "tier": 1,
  //   "isMobile": false,
  //   "type": "BENCHMARK",
  //   "fps": 21,
  //   "gpu": "intel iris graphics 6100"
  // }
})();

ReactDOM.createRoot(document.getElementById('root')).render(
    <Canvas camera={{ position: [-4,2,-3] }} frameloop="demand">
        <App />
        <ambientLight intensity={0.5}/>
        <directionalLight color='red' position={[0,0,5]} />
    </Canvas>
)
