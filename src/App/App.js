import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {useTexture, Loader, OrbitControls} from "@react-three/drei"

//Importo imagen de la carpeta assets, solo cambio el nombre para elegir una panorámica
import imagen from "../assets/foto_1.png"

//Armado del cilindro
function Cilindro(props) {
  const ref = useRef()
  const texture = useTexture(imagen)

  useFrame(() => {
    //Para que solo rote en un sentido, para más rapidez aumentar 0.004
    //ref.current.rotation.y += 0.004
  })

  //Escala 1:1, args(radio sup,radio inf, altura, vértices, número de caras altura)
  return (
    <mesh {...props} ref={ref} scale={1}>
      <cylinderGeometry args={[2, 2, 4, 100, 1, true, 0, 3.105]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}

//Armado escena
//Acomodo color de fondo, intensidad, angulo y posición de la luz estándar, posición estándar del cilindro
//Centro el cilindro en el medio de la escena

export default function App() {
  return (
    <div style={{width: "100%", backgroundColor: "lightblue", height: "100vh"}}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
          <pointLight position={[-10, -10, -10]} />

          <Cilindro position={[0, 0, 0]} />
        </Suspense>
        <OrbitControls //Hasta donde puede rotar el cilindro, en y no rota
          maxAzimuthAngle={3}
          maxPolarAngle={0}
          minAzimuthAngle={0}
          minPolarAngle={1.6}
        />
      </Canvas>
      <Loader />
    </div>
  )
}
