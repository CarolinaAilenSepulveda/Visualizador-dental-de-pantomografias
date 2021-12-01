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
import imagen2 from "../assets/foto6.png"
import imagen3 from "../assets/foto3.jpg"
import imagen4 from "../assets/foto4.jpg"

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
      <Container height="100%" maxW="8xl">
        <VStack>
          <HStack>
            <VStack height="100%" paddingTop="75" spacing="20px">
              <Image src={imagen} />
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  changePage("App")
                }}
              >
                Negatoscopio
              </Button>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  changePage("Final")
                }}
              >
                Procesar
              </Button>
            </VStack>
            <VStack height="100%" paddingTop="75" spacing="20px">
              <Image src={imagen2} />
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  changePage("App2")
                }}
              >
                Negatoscopio
              </Button>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  changePage("Final2")
                }}
              >
                Procesar
              </Button>
            </VStack>
          </HStack>
          <HStack>
            <VStack height="100%" paddingTop="75" spacing="20px">
              <Image src={imagen3} />
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  changePage("App3")
                }}
              >
                Negatoscopio
              </Button>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  changePage("Final3")
                }}
              >
                Procesar
              </Button>
            </VStack>
            <VStack height="100%" paddingTop="75" spacing="20px">
              <Image src={imagen4} />
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  changePage("App4")
                }}
              >
                Negatoscopio
              </Button>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  changePage("Final4")
                }}
              >
                Procesar
              </Button>
            </VStack>
          </HStack>
        </VStack>
      </Container>
      <Button
        bottom={20}
        colorScheme="teal"
        position="absolute"
        right={10}
        size="lg"
        variant="outline"
        onClick={() => {
          changePage("Bienvenida")
        }}
      >
        Atrás
      </Button>
    </div>
  )
}
