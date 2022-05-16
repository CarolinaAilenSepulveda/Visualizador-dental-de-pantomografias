//Librerias y componentes

import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {useTexture, Loader, OrbitControls} from "@react-three/drei"
import {
  Center,
  Box,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Container,
} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"
import {ArrowBackIcon} from "@chakra-ui/icons"

import ola2 from "../assets/wave2.svg"

import {usePage, useChangePage} from "./Hooks"

//Armado escena
//Acomodo color de fondo, intensidad, angulo y posición de la luz estándar, posición estándar del cilindro
//Centro el cilindro en el medio de la escena

export default function Negatoscopio({imagenSeleccionada, setImagenSeleccionada}) {
  const [radioSup, setRadioSup] = React.useState(2) //Estado radio superior
  const [update, setUpdate] = React.useState(false) //Renovación de estado
  const [radioInf, setRadioInf] = React.useState(2) //Estado radio inferior
  const [imagenes, setImagenes] = React.useState([]) //Estado de imagen
  const [loadImage, setLoadImage] = React.useState(false) //Cargar imagenes
  const [fsepia, setFSepia] = React.useState(0) //Setear valor de sepia
  const [fbyn, setFbyn] = React.useState(0) //Setear valor de byn
  const [finversion, setFinversion] = React.useState(0) //Setear valor de inversión/color
  const [fhue, setFhue] = React.useState(0) //Setear valor de hue-rotate

  //Armado del cilindro
  function Cilindro(props) {
    const ref = useRef()
    const texture = useTexture(imagenSeleccionada.original.url) //Emplea la componente original.url del elemento de la colección

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
  //Funciones actualizadoras filtros
  const actualizarSepia = (n) => {
    setFSepia(n)
    setUpdate(true)
  }
  const actualizarbyn = (n) => {
    setFbyn(n)
    setUpdate(true)
  }

  const actualizarinversion = (n) => {
    setFinversion(n)
    setUpdate(true)
  }
  const actualizarhue = (n) => {
    setFhue(n)
    setUpdate(true)
  }

  const page = usePage()
  const changePage = useChangePage()

  return (
    <div
      style={{
        width: "100%",
        background: `url(${ola2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          filter: `sepia(${fsepia}%) grayscale(${fbyn}%) invert(${finversion}%) hue-rotate(${fhue}deg)`,
          height: "100vh",
          width: "100%",
        }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} />

            <Cilindro
              position={[0, 0, 0]}
              radioInf={radioInf}
              radioSup={radioSup}
              rotation={[0, -1.5, 0]}
            />
          </Suspense>

          <OrbitControls //Hasta donde puede rotar el cilindro, en y no rota
            maxAzimuthAngle={1.5}
            maxPolarAngle={0}
            minAzimuthAngle={-1.5}
            minPolarAngle={1.6}
          />
        </Canvas>
      </div>
      <Loader />
      <Container maxW="container.xl">
        <div style={{position: "absolute", top: 60, left: 80, width: 150}}>
          <Slider
            aria-label="slider-ex-2" //Primer subidor, superior
            colorScheme="blue"
            defaultValue={2.5}
            max={4}
            min={1}
            step={0.00001}
            onChange={(num) => actualizarRadioSup(num)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>

        <div style={{position: "absolute", top: 130, left: 80, width: 150}}>
          <Slider
            aria-label="slider-ex-2" //Segundo subidor, inferior
            colorScheme="blue"
            defaultValue={2.5}
            max={4}
            min={1}
            step={0.00001}
            onChange={(num) => actualizarRadioInf(num)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>

        <div style={{position: "absolute", top: 250, left: 80, width: 150}}>
          <Box color="#198BC8" fontFamily="Lato" fontSize="xl" fontWeight="300">
            SEPIA
          </Box>
          <Slider
            aria-label="slider-ex-2" //Subidor sepia
            colorScheme="blue"
            defaultValue={0}
            max={100}
            min={0}
            step={0.00001}
            onChange={(n) => actualizarSepia(n)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div style={{position: "absolute", top: 350, left: 80, width: 150}}>
          <Box color="#198BC8" fontFamily="Lato" fontSize="xl" fontWeight="300">
            GRISES
          </Box>
          <Slider
            aria-label="slider-ex-2" //Subidor byn
            colorScheme="blue"
            defaultValue={0}
            max={100}
            min={0}
            step={0.00001}
            onChange={(n) => actualizarbyn(n)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div style={{position: "absolute", top: 450, left: 80, width: 150}}>
          <Box color="#198BC8" fontFamily="Lato" fontSize="xl" fontWeight="300">
            INVERTIDO
          </Box>
          <Slider
            aria-label="slider-ex-2" //Subidor inversión
            colorScheme="blue"
            defaultValue={0}
            max={100}
            min={0}
            step={0.00001}
            onChange={(n) => actualizarinversion(n)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div style={{position: "absolute", top: 550, left: 80, width: 150}}>
          <Box color="#198BC8" fontFamily="Lato" fontSize="xl" fontWeight="300">
            COLOR
          </Box>
          <Slider
            aria-label="slider-ex-2" //Subidor hue-rotate
            colorScheme="blue"
            defaultValue={0}
            max={360}
            min={0}
            step={0.00001}
            onChange={(n) => actualizarhue(n)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div style={{position: "absolute", top: 10, left: 100, width: 100}}>
          <Center color="#75747F" h="60px" w="80px">
            <Box fontFamily="Lato" fontSize="2xl" fontWeight="300">
              SUPERIOR
            </Box>
          </Center>
        </div>
        <div style={{position: "absolute", top: 80, left: 100, width: 100}}>
          <Center color="#75747F" h="60px" w="80px">
            <Box fontFamily="Lato" fontSize="2xl" fontWeight="300">
              INFERIOR
            </Box>
          </Center>
        </div>
      </Container>
      <HStack
        justify="flex-start"
        paddingBottom="20px"
        paddingLeft="50px"
        paddingTop="40px"
        position="relative"
        spacing="20px"
        width="100%"
      >
        <IconButton
          aria-label="Search database"
          icon={<ArrowBackIcon />}
          onClick={() => {
            changePage("Menu")
          }}
        />
        <Button
          colorScheme="gray"
          fontFamily="Lato"
          fontSize="xl"
          fontWeight="300"
          height="40px"
          size="sm"
          textColor="#75747F"
          variant="solid"
          onClick={() => {
            changePage("Procesada")
          }}
        >
          PROCESAR
        </Button>
      </HStack>
    </div>
  )
}
