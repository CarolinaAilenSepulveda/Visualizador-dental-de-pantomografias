import React, {useRef} from "react"
import {Canvas, useFrame} from "@react-three/fiber"

function Box(props) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y
  })

  return (
    <mesh {...props} ref={ref} scale={1}>
      <cylinderGeometry args={[1, 1, 2, 100, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  )
}

export default function App() {
  return (
    <div style={{width: "100%", backgroundColor: "lightblue", height: "100vh"}}>
      <Canvas>
        <ambientLight intensity={1} />
        <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}
