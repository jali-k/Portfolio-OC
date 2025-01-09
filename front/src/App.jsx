import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Su35 from "../public/Su35"
import "./App.css"


function App() {

  return (
    <>
      <h1>Test Model</h1>
      <Canvas style={{ width: '100vw', height: '100vh' }} className="canvas-container">
      <OrbitControls />
      <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Su35 />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
