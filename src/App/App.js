import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {useTexture, Loader, OrbitControls} from "@react-three/drei"
import {
  Center,
  Box,
  HStack,
  Image,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
} from "@chakra-ui/react"

//Importo imagen de la carpeta assets, solo cambio el nombre para elegir una panorámica
import axios from "axios"

import imagen from "../assets/foto_1.png"

//Armado escena
//Acomodo color de fondo, intensidad, angulo y posición de la luz estándar, posición estándar del cilindro
//Centro el cilindro en el medio de la escena

export default function App() {
  const [radioSup, setRadioSup] = React.useState(2) //Estado radio superior
  const [update, setUpdate] = React.useState(false) //Renovación de estado
  const [radioInf, setRadioInf] = React.useState(2) //Estado radio inferior
  const [imagenes, setImagenes] = React.useState([]) //Estado de imagen
  const [loadImage, setLoadImage] = React.useState(false) //Cargar imagenes
  const [imagenseleccionada, setImagenseleccionada] = React.useState("") //Estado para ir modificando sobre el cilindro
  const [fsepia, setFSepia] = React.useState(0) //Setear valor de sepia
  const [fbyn, setFbyn] = React.useState(0) //Setear valor de byn
  const [finversion, setFinversion] = React.useState(0) //Setear valor de inversión
  const [fhue, setFhue] = React.useState(0) //Setear valor de hue

  //Armado del cilindro
  function Cilindro(props) {
    const ref = useRef()
    const texture = useTexture(imagenseleccionada == "" ? imagen : imagenseleccionada) //Si imagen seleccionada esta vacía usa por defecto imagen, sino la cambia

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

  React.useEffect(() => {
    if (!loadImage) {
      axios
        .get("https://dientes-sepulveda.herokuapp.com/imagen-dientes") //URL base de datos
        .then((response) => setImagenes(response.data))
      setLoadImage(true)
    }
  }, [loadImage])

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

  //Función efecto de actualizar
  React.useEffect(() => {
    if (update) {
      setUpdate(false)
    }
  }, [update])

  // filter: `${}%`

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "lightblue",
        height: "100vh",
        position: "relative",
      }}
      //sepia(100%), grayscale,contrast,hue-rotate(90deg),opacity(30%)"invert(200%)",saturate,filter: "contrast(200%) brightness(150%)",
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

            <Cilindro position={[0, 0, 0]} radioInf={radioInf} radioSup={radioSup} />
          </Suspense>

          <OrbitControls //Hasta donde puede rotar el cilindro, en y no rota
            maxAzimuthAngle={3}
            maxPolarAngle={0}
            minAzimuthAngle={0}
            minPolarAngle={1.6}
          />
        </Canvas>
      </div>
      <Loader />

      <div style={{position: "absolute", top: 90, right: 10, width: 100}}>
        <Slider
          aria-label="slider-ex-2" //Primer subidor, superior
          colorScheme="pink"
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
      <VStack //Para que se acomoden vertical y vaya bajando
        style={{
          top: 200,
          right: 10,
          height: "500px",
          width: "200px",
          position: "absolute",
          overflowY: "scroll", //No utilizo el eje x para deslizar
        }}
      >
        <Center color="grey" h="100px" w="100px">
          <Box as="span" fontSize="lg" fontWeight="bold">
            Radiografía
          </Box>
        </Center>
        {imagenes //Ordenar las imagenes por nombre, orden numérico
          .sort(function (a, b) {
            if (a.nombre > b.nombre) {
              return 1
            }
            if (a.nombre < b.nombre) {
              return -1
            }

            return 0
          })
          .map(
            (
              elem, //Al tocar la imagen llama al metodo set y carga el url, la imagen queda seteada como botón
            ) => (
              <VStack
                key={elem.id}
                as="button"
                onClick={() => setImagenseleccionada(elem.imagen.url)}
              >
                <Image src={elem.imagen.url} />
                <Text>{elem.nombre}</Text>
              </VStack>
            ),
          )}
      </VStack>
      <div style={{position: "absolute", top: 90, left: 10, width: 100}}>
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

      <div style={{position: "absolute", top: 200, left: 10, width: 100}}>
        <Box as="span" fontSize="lg" fontWeight="bold">
          Sepia
        </Box>
        <Slider
          aria-label="slider-ex-2" //Subidor sepia
          colorScheme="green"
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
      <div style={{position: "absolute", top: 300, left: 10, width: 100}}>
        <Box as="span" fontSize="lg" fontWeight="bold">
          Escala grises
        </Box>
        <Slider
          aria-label="slider-ex-2" //Subidor byn
          colorScheme="green"
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
      <div style={{position: "absolute", top: 400, left: 10, width: 100}}>
        <Box as="span" fontSize="lg" fontWeight="bold">
          Inversión
        </Box>
        <Slider
          aria-label="slider-ex-2" //Subidor inversión
          colorScheme="green"
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
      <div style={{position: "absolute", top: 500, left: 10, width: 100}}>
        <Box as="span" fontSize="lg" fontWeight="bold">
          Hue-rotate
        </Box>
        <Slider
          aria-label="slider-ex-2" //Subidor hue
          colorScheme="green"
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
