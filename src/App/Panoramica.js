import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
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
  Button,
  Container,
} from "@chakra-ui/react"

import imagen from "../assets/foto1.png"

import {usePage, useChangePage} from "./Hooks"

export default function Panoramica() {
  const page = usePage()
  const changePage = useChangePage()

  console.log(page)

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "lightblue",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} />
          </Suspense>
        </Canvas>
      </div>
      <Container maxW="container.xl">
        <VStack>
          <div style={{position: "absolute", bottom: 200, left: 700, width: 100}}>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={() => {
                changePage("App")
              }}
            >
              Visualizar
            </Button>
          </div>
          <Image bottom={300} left={450} position="absolute" src={imagen} />
          <div style={{position: "absolute", bottom: 20, right: 10, width: 100}}>
            <Button
              colorScheme="teal"
              size="lg"
              variant="outline"
              onClick={() => {
                changePage("Bienvenida")
              }}
            >
              Atrás
            </Button>
          </div>
        </VStack>
      </Container>
    </div>
  )
}
