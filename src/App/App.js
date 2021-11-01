import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {useTexture, Loader, OrbitControls} from "@react-three/drei"
import {Center, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb} from "@chakra-ui/react"

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
      <cylinderGeometry args={[props.radioSup, props.radioInf, 4, 100, 1, true, 0, 3.105]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}

//Armado escena
//Acomodo color de fondo, intensidad, angulo y posición de la luz estándar, posición estándar del cilindro
//Centro el cilindro en el medio de la escena

export default function App() {
  const [radioSup, setRadioSup] = React.useState(2) //Estado radio superior
  const [update, setUpdate] = React.useState(false) //Renovación de estado
  const [radioInf, setRadioInf] = React.useState(2) //Estado radio inferior

  //Función actualizar radio superior
  const actualizarRadioSup = (num) => {
    setRadioSup(num)
    setUpdate(true)
  }
  //Función actualizar radio inferior
  const actualizarRadioInf = (num) => {
    setRadioInf(num)
    setUpdate(true)
  }

  //Función efecto de actualizar
  React.useEffect(() => {
    if (update) {
      setUpdate(false)
    }
  }, [update])

  return (
    <div
      style={{width: "100%", backgroundColor: "lightblue", height: "100vh", position: "relative"}}
    >
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
          <pointLight position={[-10, -10, -10]} />

          <Cilindro position={[0, 0, 0]} radioInf={radioInf} radioSup={radioSup} />
        </Suspense>
        <OrbitControls //Hasta donde puede rotar el cilindro, en y no rota
          maxAzimuthAngle={3}
          maxPolarAngle={0}
          minAzimuthAngle={0}
          minPolarAngle={1.6}
        />
      </Canvas>

      <Loader />

      <div style={{position: "absolute", top: 90, right: 10, width: 100}}>
        <Slider
          aria-label="slider-ex-2" //Primer subidor, superior
          colorScheme="pink"
          defaultValue={2.5}
          max={4}
          min={1}
          onChange={(num) => actualizarRadioSup(num)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
      <div style={{position: "absolute", top: 90, left: 10, width: 100}}>
        <Slider
          aria-label="slider-ex-2" //Segundo subidor, inferior
          colorScheme="blue"
          defaultValue={2.5}
          max={4}
          min={1}
          onChange={(num) => actualizarRadioInf(num)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
      <div style={{position: "absolute", top: 10, right: 10, width: 100}}>
        <Center bg="hotpink" color="white" h="60px" w="80px">
          <Box as="span" fontSize="lg" fontWeight="bold">
            Radio superior
          </Box>
        </Center>
      </div>
      <div style={{position: "absolute", top: 10, left: 10, width: 100}}>
        <Center bg="blue" color="white" h="60px" w="80px">
          <Box as="span" fontSize="lg" fontWeight="bold">
            Radio inferior
          </Box>
        </Center>
      </div>
    </div>
  )
}
