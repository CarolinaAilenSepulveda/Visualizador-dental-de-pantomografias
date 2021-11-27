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
      <Container height="100%" maxW="8xl">
        <VStack height="100%" paddingTop="200" spacing="20px">
          <Image src={imagen} />
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => {
              changePage("App")
            }}
          >
            Visualizar
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
          changePage("Bienvenida")
        }}
      >
        Atrás
      </Button>
    </div>
  )
}
