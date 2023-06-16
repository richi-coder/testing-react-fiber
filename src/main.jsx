import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Canvas camera={{ position: [-40,15,-20] }} frameloop="always">
        <App />
        <ambientLight intensity={0.5}/>
        <directionalLight color='red' position={[0,0,5]} />
    </Canvas>
)
