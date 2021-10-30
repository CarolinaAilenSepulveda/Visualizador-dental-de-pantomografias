import React, {useRef} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {useTexture, Loader} from "@react-three/drei"

import imagen from "../assets/jirafa.png"

//Armado del cilindro
function Cilindro(props) {
  const ref = useRef()
  const texture = useTexture(imagen)

  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y //Rotación respecto de x e y
  })

  //Escala 1:1, args(radio sup,radio inf, altura, vértices, número de caras altura)
  //Color rosa
  return (
    <mesh {...props} ref={ref} scale={1}>
      <cylinderGeometry args={[1, 1, 2, 100, 1]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}

//Armado escena
//Acomodo color de fondo, intensidad, angulo y posición de la luz estándar, posición estándar del cilindro
export default function App() {
  return (
    <div style={{width: "100%", backgroundColor: "lightblue", height: "100vh"}}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        <Cilindro position={[-1.2, 0, 0]} />
      </Canvas>
      <Loader />
    </div>
  )
}

//Para ejecutar Yarn run start
