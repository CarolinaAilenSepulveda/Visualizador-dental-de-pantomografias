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

import imagen from "../assets/resultado1.png"

import {usePage, useChangePage} from "./Hooks"

export default function Final() {
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
      <Container height="100%" maxW="8xl" widht="100%">
        <VStack height="100%" paddingTop="100" spacing="20px">
          <Image src={imagen} />
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => {
              changePage("Nega")
            }}
          >
            Negatoscopio
          </Button>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => {
              changePage("Diagnostico")
            }}
          >
            Ver diagnóstico
          </Button>
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
          changePage("Panoramica")
        }}
      >
        Atrás
      </Button>
    </div>
  )
}
