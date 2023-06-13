import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Canvas camera={{ position: [-400,15,-40] }} frameloop="always">
        <App />
        <ambientLight intensity={0.5}/>
        <directionalLight color='red' position={[0,0,5]} />
    </Canvas>
)
